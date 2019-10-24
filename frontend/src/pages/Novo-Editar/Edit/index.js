import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { MdEdit } from 'react-icons/md';

import * as Yup from 'yup';
import { format, parseISO } from 'date-fns';

import Banner from '../Banner/index';
import DatePicker from '~/components/DatePicker';

import { Container } from './styles';
import api from '~/service/api';
import history from '~/service/history';

const schema = Yup.object().shape({
  file_id: Yup.string(),
  title: Yup.string(),
  description: Yup.string(),
  date: Yup.string(),
  location: Yup.string(),
});

export default function Editar({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`organizing/${id}`);
      setMeetup({
        ...response.data.meetup,
        formattedDate: format(
          parseISO(response.data.meetup.date),
          "dd/MM/Y - HH'h'mm"
        ),
      });
    }
    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      await api.put(`meetup/${id}`, data);
      toast.success('Meetup editado com sucesso');
      history.push(`/detalhes/${id}`);
    } catch (err) {
      const errData = err.response.data;
      toast.error(
        errData && errData.error
          ? `Erro ao editar: ${errData.error}`
          : 'Erro ao editar, tente de novo'
      );
    }
  }
  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <Banner name="file_id" />
        <Input name="title" placeholder="Title" />
        <Textarea multiline name="description" placeholder="Description" />
        <DatePicker name="date" placeholder="Date" />
        <Input name="location" placeholder="Location" />
        <button type="submit">
          <MdEdit size={15} color="#fff" /> Editar
        </button>
      </Form>
    </Container>
  );
}

Editar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
