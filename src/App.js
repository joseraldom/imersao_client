import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Container, Content } from "./styles/app";

import store from "./store";
import Routes from "./routes";
import Header from "./components/header";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
