import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/login.css';
import '../styles/pages/cadastro.css';

import logoImage from '../images/lumiaLogo.png';

const Cadastro: React.FC = () => {
  const [fisica, setFisica] = useState(true);

  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [logradouro, setLogradouro] = useState('');

  const handleSubmit = () => {};

  return (
    <div id='login'>
      <div className='loginContainer'>
        <img src={logoImage} alt='Logo' />
        <h1>Cadastrar</h1>
        <p>Abra a sua conta</p>
        <div className='optionsContainer'>
          <button
            onClick={() => setFisica(true)}
            className={fisica ? 'active' : ''}
          >
            Pessoa Física
          </button>
          <button
            onClick={() => setFisica(false)}
            className={fisica ? '' : 'active'}
          >
            Pessoa Jurídica
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {fisica ? (
            <>
              <div className='inputBox'>
                <label htmlFor='nome'>Nome</label>
                <input type='text' id='nome' placeholder='Nome' />
              </div>
              <div className='inputBox'>
                <label htmlFor='cpf'>CPF</label>
                <input type='text' id='cpf' placeholder='CPF' />
              </div>
              <div className='inputBox'>
                <label htmlFor='rg'>RG</label>
                <input type='text' id='rg' placeholder='RG' />
              </div>
              <div className='inputBox'>
                <label htmlFor='datanascimento'>Data de Nascimento</label>
                <input type='date' id='datanascimento' />
              </div>
            </>
          ) : (
            <>
              <div className='inputBox'>
                <label htmlFor='razaosocial'>Razão Social</label>
                <input
                  type='text'
                  id='razaosocial'
                  placeholder='Razão Social'
                />
              </div>
              <div className='inputBox'>
                <label htmlFor='cnpj'>CNPJ</label>
                <input type='text' id='cnpj' placeholder='CNPJ' />
              </div>
            </>
          )}
          <div className='inputBox'>
            <label htmlFor='cep'>CEP</label>
            <input
              onChange={(e) => {
                const newCep = e.target.value;
                setCep(newCep);

                if (newCep.length === 8) {
                  fetch(`https://brasilapi.com.br/api/cep/v1/${newCep}`)
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);

                      const {
                        street: newAddress,
                        city: newCity,
                        state: newState,
                      } = data;

                      if (newCity && newCity !== '') {
                        setCidade(newCity);
                      }
                      if (newAddress && newAddress !== '') {
                        setLogradouro(newAddress);
                      }
                      if (newState && newState !== '') {
                        setEstado(newState);
                      }
                    });
                }
              }}
              value={cep}
              type='number'
              id='cep'
              autoComplete='noff'
              placeholder='CEP'
            />
          </div>
          <div className='inputBox'>
            <label htmlFor='logradouro'>Logradouro</label>
            <input
              onChange={(e) => setLogradouro(e.target.value)}
              value={logradouro}
              type='text'
              id='logradouro'
              placeholder='Logradouro'
            />
          </div>
          <div className='inputBox'>
            <label htmlFor='numero'>Numero</label>
            <input type='text' id='numero' placeholder='Numero' />
          </div>
          <div className='inputBox'>
            <label htmlFor='cidade'>Cidade</label>
            <input
              onChange={(e) => setCidade(e.target.value)}
              value={cidade}
              type='text'
              id='cidade'
              placeholder='Cidade'
            />
          </div>
          <div className='inputBox'>
            <label htmlFor='estado'>Estado</label>
            <input
              onChange={(e) => setEstado(e.target.value)}
              value={estado}
              type='text'
              id='estado'
              placeholder='Estado'
            />
          </div>
          <div className='inputBox'>
            <label htmlFor='telefone'>Telefone</label>
            <input type='text' id='telefone' placeholder='Telefone' />
          </div>
          <div className='inputBox'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' placeholder='Email' />
          </div>
          <div className='inputBox'>
            <label htmlFor='senha'>Senha</label>
            <input type='password' id='senha' placeholder='Senha' />
          </div>
          <Link className='enter' to=''>
            Cadastrar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
