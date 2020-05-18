import { call, put } from "redux-saga/effects";

import api from "../../services/api";
import { Creators as CadastroActions } from "../ducks/cadastro";

export function* getCadastro(action) {
  console.log(action);
  try {
    const response = yield call(api.post, "/usuarios", action.payload);
    console.log(response);
    // yield put(CadastroActions.getLoginSuccess({ data: response, auth: true }));
  } catch (error) {
    console.log(error);
    // yield put(CadastroActions.getLoginSuccess({ auth: false }));
  }
}
