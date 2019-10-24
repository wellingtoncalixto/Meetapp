import React, {useMemo} from 'react';

import PropTypes from 'prop-types';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Info,
  Banner,
  Name,
  NameText,
  Time,
  TimeText,
  Title,
  Locale,
  LocaleText,
  Button,
  ButtonText,
} from './styles';

export default function Meetups({data, onSubscription, buttonText}) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Banner
        source={{
          uri: data.banner
            ? data.banner.url
            : `http://api.adorable.io/avatar/50/${data.title}.png`,
        }}
      />
      <Info>
        <Title>{data.title}</Title>

        <Time>
          <Icon name="event" size={14} color="rgba(0,0,0,0.5)" />
          <TimeText>{dateParsed}</TimeText>
        </Time>
        <Locale>
          <Icon name="place" size={14} color="rgba(0,0,0,0.5)" />
          <LocaleText>{data.location}</LocaleText>
        </Locale>
        <Name>
          <Icon name="person" size={14} color="rgba(0,0,0,0.5)" />
          <NameText>Organizador: {data.user.name}</NameText>
        </Name>
      </Info>

      <Button onPress={onSubscription}>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </Container>
  );
}

Meetups.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onSubscription: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
};

Meetups.defaultProps = {
  onSubscription: null,
};
