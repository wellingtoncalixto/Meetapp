import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';
import {withNavigationFocus} from 'react-navigation';
import {ActivityIndicator, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Header from '~/components/Header';
import MeetupsSubscription from '~/components/MeetupsSubscription';

import {Container, List} from './styles';

function Inscription({isFocused}) {
  const [loading, setLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  async function loadMeetups() {
    setLoading(true);
    const response = await api.get('subscription');
    if (response.data === []) setLoading(false);
    setLoading(false);
    setMeetups(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }
  }, [isFocused]);

  async function handleCancel({id, meetup}) {
    try {
      await api.delete(`subscription/${id}`);
      Alert.alert(
        `Sucesso`,
        `Sua participação no meetup de ${meetup.title} foi cancelada com sucesso`
      );
    } catch (err) {
      Alert.alert(
        `Erro ao se Inscrever`,
        'Verifique se não esta tentando se inscrever em um meetup é seu ou que já passou'
      );
    }
  }

  return (
    <Container>
      <Header />
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <MeetupsSubscription
              data={item}
              onCancel={() => handleCancel(item)}
              buttonText="Cancelar Inscrição"
            />
          )}
        />
      )}
    </Container>
  );
}
Inscription.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

Inscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Inscription);
