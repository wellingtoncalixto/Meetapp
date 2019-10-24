import { takeLatest, put, call, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/service/api';
import history from '~/service/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    const errData = err.response.data;
    toast.error(
      errData && errData.error
        ? `Erro ao entrar: ${errData.error}`
        : 'Erro ao entrar, tente de novo'
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    toast.success('Cadastro realizado com sucesso');
    history.push('/');
  } catch (err) {
    const errData = err.response.data;
    toast.error(
      errData && errData.error
        ? `Erro ao cadastra: ${errData.error}`
        : 'Erro ao cadastra, tente de novo'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
