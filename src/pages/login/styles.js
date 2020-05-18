import styled from "styled-components";

export const Form = styled.form`
  margin-top: 60px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 70%;
    height: 33px;
    border-radius: 5px;
    margin-top: 5px;
    box-shadow: none;
    outline: none;
    border-style: solid;
    border-color: #138a72;
    text-indent: 5px;
    color: #138a72;
  }

  button {
    margin-top: 10px;
    width: 70%;
    height: 35px;
    background-color: #138a72;
    color: #fff;
    border-style: none;
    border-radius: 50px;
    cursor: pointer;
  }

  a {
    margin-top: 5px;
    text-decoration: none;
    color: #138a72;
  }
`;
