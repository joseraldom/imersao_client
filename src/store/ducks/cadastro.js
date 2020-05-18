export const Types = {
  GET_REQUEST: "cadastro/GET_REQUEST",
  GET_SUCCESS: "cadastro/GET_SUCCESS",
};

const INITIAL_STATE = {
  nome: "",
  email: "",
  senha: "",
  save: null,
};

export default function cadastro(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state };
    case Types.GET_SUCCESS:
      return { ...state, save: action.payload.data.save };
    default:
      return state;
  }
}

export const Creators = {
  getCadastroRequest: (usuario) => ({
    type: Types.GET_REQUEST,
    payload: usuario,
  }),
  getCadastroSuccess: (data) => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
