import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/login.css';
import '../styles/pages/recuperar-senha.css';

const RecuperarSenha: React.FC = () => {
  const [emailSended, setEmailSended] = useState(false);
  const handleSubmit = () => {};

  const handleSendEmail = () => {
    setEmailSended(true);
  };

  return (
    <div id='login'>
      <div className='loginContainer'>
        {!emailSended ? (
          <>
            <h1>Recuperar Senha</h1>
            <p>Digite seu email para recuperar a senha.</p>
            <form onSubmit={handleSubmit}>
              <input type='text' placeholder='Email' />
              <button type='button' className='enter' onClick={handleSendEmail}>
                Enviar
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>Enviado!</h1>
            <p>Verifique seu email.</p>
            <Link to='/Login' className='enter'>
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default RecuperarSenha;
