import React, { Component, Fragment } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";

import { Form } from "./styles";

class Login extends Component {
  state = {
    email: "",
    senha: "",
  };

  handlerLogin = (e) => {
    e.preventDefault();
    this.props.getLoginRequest(this.state);
  };

  render() {
    return (
      <Fragment>
        <p>{this.props.login.auth == false ? "usuario não existe" : null}</p>

        <Form onSubmit={this.handlerLogin}>
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

          <Link to="/cadastro">Not registred? Sing up.</Link>
          <button type="submit">Sing In</button>
        </Form>
        <Route
          path="/"
          component={() =>
            this.props.login.auth ? <Redirect to="cadastro" /> : null
          }
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
