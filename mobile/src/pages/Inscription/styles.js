import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export const Time = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;
