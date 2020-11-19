import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/login.css';

import logoImage from '../images/lumiaLogo.png';

const Login: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <div id='login'>
      <div className='loginContainer'>
        <img src={logoImage} alt='Logo' />
        <h1>Bem Vindo!</h1>
        <p>Acesse a sua conta</p>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Login' />
          <input type='password' placeholder='Senha' />
          <div className='anotherOptionsContainer'>
            <Link to='/recuperarSenha'>ESQUECI A SENHA</Link>
            <Link to='/cadastro'>ABRA SUA CONTA</Link>
          </div>
          <Link className='enter' to=''>
            ENTRAR
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
