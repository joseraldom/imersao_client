import { call, put } from "redux-saga/effects";

import api from "../../services/api";
import { Creators as LoginActions } from "../ducks/login";

export function* getLogin(action) {
  try {
    const response = yield call(api.post, "/session", action.payload);
    yield put(LoginActions.getLoginSuccess({ data: response, auth: true }));
  } catch (error) {
    yield put(LoginActions.getLoginSuccess({ auth: false }));
  }
}
