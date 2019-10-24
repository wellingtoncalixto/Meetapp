import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 5px;
  margin: 5px 0 10px;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Info = styled.View`
  padding: 10px;
  justify-content: center;
`;

export const Banner = styled.Image`
  height: 150px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Time = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const TimeText = styled.Text`
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Locale = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const LocaleText = styled.Text`
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Name = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NameText = styled.Text`
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Button = styled.TouchableOpacity`
  background: #f94d6a;
  align-items: stretch;
  height: 40px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
