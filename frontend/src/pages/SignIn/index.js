import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string()
    .min(6)
    .required('A senha é obrigatoria'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu Login" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
        <Link to="/Cadastrar">Crie uma conta gratuita</Link>
      </Form>
    </>
  );
}
