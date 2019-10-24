import React from 'react';

import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Banner from '../Banner/index';
import DatePicker from '~/components/DatePicker';

import api from '~/service/api';
import history from '~/service/history';

import { Container } from './styles';

const schema = Yup.object().shape({
  file_id: Yup.string().required('Banner é obrigatorio'),
  title: Yup.string().required('Titulo é obrigatorio'),
  description: Yup.string().required('Descrição é obrigatoria'),
  date: Yup.string().required('Data é obrigatorio'),
  location: Yup.string().required('Localização é obrigatorio'),
});

export default function Create() {
  async function handleSubmit(data) {
    try {
      await api.post('/meetup', data);
      toast.success('Meetup cadastrado com sucesso');
      history.push('/dashboard');
    } catch (err) {
      const errData = err.response.data;
      toast.error(
        errData && errData.error
          ? `Erro ao cadastrar: ${errData.error}`
          : 'Erro ao cadastrar, tente de novo'
      );
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Banner name="file_id" />
        <Input name="title" placeholder="Title" />
        <Textarea multiline name="description" placeholder="Description" />
        <DatePicker name="date" placeholder="Date" />
        <Input name="location" placeholder="Location" />
        <button type="submit">
          <MdAddCircleOutline size={15} color="#fff" /> Adicionar{' '}
        </button>
      </Form>
    </Container>
  );
}
