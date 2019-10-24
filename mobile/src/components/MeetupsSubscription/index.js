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

export default function MeetupsSubscription({data, onCancel, buttonText}) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.meetup.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.meetup.date]);

  return (
    <Container past={data.meetup.past}>
      <Banner
        source={{
          uri: data.meetup.banner
            ? data.meetup.banner.url
            : `http://api.adorable.io/avatar/50/${data.meetup.title}.png`,
        }}
      />
      <Info>
        <Title>{data.meetup.title}</Title>

        <Time>
          <Icon name="event" size={14} color="rgba(0,0,0,0.5)" />
          <TimeText>{dateParsed}</TimeText>
        </Time>
        <Locale>
          <Icon name="place" size={14} color="rgba(0,0,0,0.5)" />
          <LocaleText>{data.meetup.location}</LocaleText>
        </Locale>
        <Name>
          <Icon name="person" size={14} color="rgba(0,0,0,0.5)" />
          <NameText>Organizador: {data.meetup.user.name}</NameText>
        </Name>
      </Info>

      <Button onPress={onCancel}>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </Container>
  );
}

MeetupsSubscription.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onCancel: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
};

MeetupsSubscription.defaultProps = {
  onCancel: null,
};
