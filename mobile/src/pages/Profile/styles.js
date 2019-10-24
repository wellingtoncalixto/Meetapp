import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  align-self: stretch;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Separetor = styled.Text`
  height: 1px;
  margin: 20px 0 30px;
  background: rgba(255, 255, 255, 0.2);
`;

export const SubmitiButton = styled(Button)`
  background: #e5556e;
  margin-top: 5px;
`;

export const LogoutButtom = styled(Button)`
  background: #d44059;
  margin-top: 10px;
`;
