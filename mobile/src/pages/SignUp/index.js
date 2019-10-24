import React, {useRef, useState} from 'react';
import {Alert, Image} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitiButton,
  SignLink,
  SignLinkText,
} from './styles';
import {signUpRequest} from '~/store/modules/auth/actions';

export default function SignUp({navigation}) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit() {
    try {
      dispatch(signUpRequest(name, email, password));
      navigation.navigate('SignIn');
      Alert.alert('Sucesso', 'Cadastro Realizado com Sucesso');
    } catch (err) {
      Alert.alert('Erro no cadastro', 'Verrifique os seus datos');
    }
  }
  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          icon="person-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="digite seu e-mail"
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
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua Senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <SubmitiButton loading={loading} onPress={handleSubmit}>
          Acessar
        </SubmitiButton>
      </Form>
      <SignLink onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>Já possuo uma conta</SignLinkText>
      </SignLink>
    </Container>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
