import React, {useEffect, useState, useMemo} from 'react';

import {ActivityIndicator, Alert} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import PropTypes from 'prop-types';
import {format, addDays, subDays} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import api from '~/services/api';

import Header from '~/components/Header';
import Meetups from '~/components/Meetups';

import {Container, Time, List, Buttons} from './styles';

function Dashboard({isFocused}) {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMMM", {locale: pt}),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);
      const response = await api.get('meetups', {
        params: {date},
      });
      setMeetups(response.data);
      setLoading(false);
    }
    if (isFocused) {
      loadMeetups();
    }
  }, [date, isFocused]);

  async function handleSubscription(id, title) {
    try {
      await api.post(`subscription`, null, {
        params: {meetup_id: id},
      });
      Alert.alert(
        `Sucess`,
        `inscrição realizada no meetup de ${title} que acontecera em ${dateFormated}`
      );
    } catch (err) {
      Alert.alert(
        `Erro ao se Inscrever`,
        'Verifique se não esta tentando se inscrever em um meetup que é seu ou um que já passou'
      );
    }
  }

  function subDay() {
    setDate(subDays(date, 1));
  }

  function addDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <Header />
      <Buttons>
        <TouchableOpacity onPress={subDay}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
        <Time>{dateFormated}</Time>
        <TouchableOpacity onPress={addDay}>
          <Icon name="chevron-right" size={30} color="#fff" />
        </TouchableOpacity>
      </Buttons>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Meetups
              data={item}
              onSubscription={() => handleSubscription(item.id, item.title)}
              buttonText="Realizar Inscrição"
            />
          )}
        />
      )}
    </Container>
  );
}

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
