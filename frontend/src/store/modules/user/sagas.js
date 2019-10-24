import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/service/api';
import { updateProfileSuccess, updateProfileFailute } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);
    toast.success('Dados atualizados com sucesso');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    const errData = err.response.data;
    toast.error(
      errData && errData.error
        ? `Erro ao editar: ${errData.error}`
        : 'Erro ao editar, tente de novo'
    );
    yield put(updateProfileFailute());
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
