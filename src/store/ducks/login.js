export const Types = {
  GET_REQUEST: "login/GET_REQUEST",
  GET_SUCCESS: "login/GET_SUCCESS",
};

const INITIAL_STATE = {
  email: "",
  senha: "",
  auth: null,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state };
    case Types.GET_SUCCESS:
      return { ...state, auth: action.payload.data.auth };
    default:
      return state;
  }
}

export const Creators = {
  getLoginRequest: (usuario) => ({ type: Types.GET_REQUEST, payload: usuario }),
  getLoginSuccess: (data) => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
