/** @format */

import Cookies from 'js-cookie';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login } from '../store/thunks/userThunks';

const Container = styled.div``;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.5);
  flex: 1;
  min-width: 40%;
  margin: 1.25rem 0.625rem 0 0;
  padding: 0.625rem;
  color: black;
`;

const Button = styled.button`
  margin-top: 1.25rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: #000;
    color: #00d8d8;
  }
  &:disabled {
    cursor: not-allowed;
    color: #004927;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 0.725rem;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  &:hover {
    color: rgba(4, 120, 87, 1);
  }
`;

const Wrapper = styled.div`
  @media only screen and (max-width: 900px) {
    width: 75%;
  }
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
`;

const Form = styled.form`
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Error = styled(Link)`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { isFetching, error } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const loginCkickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      let res = await login(dispatch, { email: email, password: password });
      if (error === false && isFetching === false) {
        Cookies.remove('token');
        if (res?.data.token !== undefined) {
          Cookies.set('token', res?.data.token);
        }
        window.location.reload();
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <Container className='flex flex-col items-center justify-center w-screen h-screen'>
      <h1>Demo Account: 'test@email.com'</h1>
      <h1>Demo password: 'test0123'</h1>
      <Wrapper className='w-4/12 m-5 bg-white p-7'>
        <h1 className='text-4xl font-light text-gray-700'>LOGIN TO ACCOUNT</h1>
        <Form className='flex flex-col'>
          <Input
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            disabled={isFetching}
            className='w-5/12 p-3 text-white bg-green-700'
            onClick={loginCkickHandler}>
            LOGIN
          </Button>
          {error && <Error to={'/'}>Something went wrong...</Error>}
          <StyledLink to={'/'}>DO NOT REMEMBER THE PASSWORD ?</StyledLink>
          <StyledLink to={'/signup'}>CREATE A NEW ACCOUNT</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
