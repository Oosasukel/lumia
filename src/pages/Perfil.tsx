import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import Header from '../components/Header';
import Sidemenu from '../components/Sidemenu';

import '../styles/pages/perfil.css';

const Perfil: React.FC = () => {
  const [fisica, setFisica] = useState(true);

  return (
    <div id='perfil'>
      <Sidemenu />
      <div className='perfilContent'>
        <Header />
        <div className='content'>
          <div className='itemsContainer'>
            <div className='inputsContainer'>
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
                <label htmlFor='logradouro'>Logradouro</label>
                <input type='text' id='logradouro' placeholder='Logradouro' />
              </div>
              <div className='inputBox'>
                <label htmlFor='numero'>Numero</label>
                <input type='text' id='numero' placeholder='Numero' />
              </div>
              <div className='inputBox'>
                <label htmlFor='cep'>CEP</label>
                <input type='text' id='cep' placeholder='CEP' />
              </div>
              <div className='inputBox'>
                <label htmlFor='cidade'>Cidade</label>
                <input type='text' id='cidade' placeholder='Cidade' />
              </div>
              <div className='inputBox'>
                <label htmlFor='estado'>Estado</label>
                <input type='text' id='estado' placeholder='Estado' />
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
              <button className='salvar'>Salvar</button>
            </div>
            <div className='iconContainer'>
              <FaUserAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
