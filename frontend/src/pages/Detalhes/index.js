import React, { useEffect, useState } from 'react';

import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import {
  MdEdit,
  MdDelete,
  MdPermContactCalendar,
  MdLocationOn,
} from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import {
  Loading,
  Container,
  Buttons,
  Title,
  EditButton,
  CancelButton,
  Footer,
  Date,
  Local,
} from './styles';

import api from '~/service/api';
import history from '~/service/history';

export default function Detalhes({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState({});
  const [banner, setBanner] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      setLoading(true);
      const response = await api.get(`organizing/${id}`);
      setMeetup({
        ...response.data.meetup,
        formattedDate: format(
          parseISO(response.data.meetup.date),
          "dd/MM/Y - HH'h'mm"
        ),
      });
      setBanner({
        ...response.data.meetup.banner,
      });
      setLoading(false);
    }
    loadMeetup();
  }, [id]);

  async function handleDelete(meetupId) {
    await api.delete(`/meetup/${meetupId}`);
    history.push('/dashboard');
  }
  return (
    <>
      {loading ? (
        <Loading className="loader">
          <Loader
            type="Puff"
            color="rgba(0,0,0,0.5)"
            height={100}
            width={100}
            timeout={3000} // 3 secs
          />
        </Loading>
      ) : (
        <Container>
          <Title>
            <strong>{meetup.title}</strong>
             {meetup.past ? <div></div> :
             (<Buttons>
              <EditButton to={`/meetup/${meetup.id}/editar`}>
                <MdEdit size={20} color="#fff" />
                <strong>Editar</strong>
              </EditButton>
              <CancelButton onClick={() => handleDelete(meetup.id)}>
                <MdDelete size={20} color="#fff" />
                <strong>Cancelar</strong>
              </CancelButton>
            </Buttons>)
          }

          </Title>
          <img src={banner.url} alt={meetup.title} />
          <p>{meetup.description}</p>
          <Footer>
            <Date>
              <MdPermContactCalendar size={15} color="#fff" />
              <span>{meetup.formattedDate}</span>
            </Date>
            <Local>
              <MdLocationOn size={15} color="#fff" />
              <span>{meetup.location}</span>
            </Local>
          </Footer>
        </Container>
      )}
    </>
  );
}

Detalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
