import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CadastroActions } from "../../store/ducks/cadastro";

import { Form } from "./styles";

class Cadastro extends Component {
  state = {
    nome: "",
    email: "",
    senha: "",
  };

  handlerCadastro = (e) => {
    e.preventDefault();
    this.props.getCadastroRequest(this.state);
  };

  render() {
    return (
      <Fragment>
        <p>{this.props.cadastro.auth == false ? "Usuario não existe" : null}</p>

        <Form onSubmit={this.handlerCadastro}>
          <input
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
            placeholder="Nome"
          />
          <input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="Email"
          />
          <input
            type="password"
            value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })}
            placeholder="Password"
          />
          <button type="submit">Sing Up</button>
        </Form>
        <Route
          path="/"
          component={() =>
            this.props.cadastro.save ? <Redirect to="/" /> : null
          }
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cadastro: state.cadastro,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CadastroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
