import React, {useRef, useState, useEffect} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  Title,
  Form,
  FormInput,
  Separetor,
  SubmitiButton,
  LogoutButtom,
} from './styles';
import Header from '~/components/Header';

import {updateProfileRequest} from '~/store/modules/user/actions';
import {signOut} from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Header />
      <Title>Meu Perfil</Title>

      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="digite seu nome completo"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />

        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="digite seu e-mail"
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => oldPasswordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <Separetor />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua Senha Atual"
          ref={oldPasswordRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={oldPassword}
          onChangeText={setOldPassword}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua Senha"
          ref={passwordRef}
          returnKeyType="next"
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          value={password}
          onChangeText={setPassword}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Confirme sua nova senha"
          ref={confirmPasswordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <SubmitiButton onPress={handleSubmit}>Atualizar perfil</SubmitiButton>
        <LogoutButtom onPress={handleSignOut}>Sair</LogoutButtom>
      </Form>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
