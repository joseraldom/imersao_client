import { all, takeLatest } from "redux-saga/effects";

import { Types as LoginTypes } from "../ducks/login";
import { getLogin } from "./login";
import { Types as CadastroTypes } from "../ducks/cadastro";
import { getCadastro } from "./cadastro";

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.GET_REQUEST, getLogin),
    takeLatest(CadastroTypes.GET_REQUEST, getCadastro),
  ]);
}
