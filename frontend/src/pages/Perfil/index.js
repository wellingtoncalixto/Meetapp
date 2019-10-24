import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Perfil() {
  const profile = useSelector(state => state.user.profile);
  const dispath = useDispatch();

  function handleSubmit(data) {
    dispath(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova Senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">
          {' '}
          <MdAddCircleOutline size={15} color="#fff" />
          Atualizar Perfil
        </button>
      </Form>
    </Container>
  );
}
