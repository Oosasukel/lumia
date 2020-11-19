import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Header from '../components/Header';
import Sidemenu from '../components/Sidemenu';

import '../styles/pages/transacoes.css';

const Transacoes: React.FC = () => {
  const [opcao, setOpcao] = useState(1);

  return (
    <div id='transacoes'>
      <Sidemenu />
      <div className='transacoesContent'>
        <Header />
        <div className='content'>
          <div className='transacoesContainer'>
            <div className='abas'>
              <span
                className={opcao === 1 ? 'aba active' : 'aba'}
                onClick={() => setOpcao(1)}
              >
                Fatura de pagamento
              </span>
              <span
                className={opcao === 2 ? 'aba active' : 'aba'}
                onClick={() => setOpcao(2)}
              >
                <FaSearch />
                Histórico
              </span>
            </div>
            <div className='pagamentoContainer'>
              {opcao === 1 ? (
                <>
                  <label>Numeração do boleto</label>
                  <input type='number' placeholder='Numeração do boleto' />
                  <div className='inputsContainer'>
                    <div className='inputBox'>
                      <label>Valor</label>
                      <input
                        className='inputValue'
                        type='number'
                        placeholder='Valor R$'
                      />
                    </div>
                    <div className='inputBox'>
                      <label>Vencimento</label>
                      <input
                        className='inputDate'
                        type='date'
                        placeholder='Data de Vencimento'
                      />
                    </div>
                  </div>
                  <label>Descrição</label>
                  <input type='text' placeholder='Pequena descrição...' />
                  <div className='selectDiv'>
                    <select defaultValue='none'>
                      <option value='none'>Método de pagamento...</option>
                      <option value='bitcoin'>Bitcoin</option>
                      <option value='etherium'>Etherium</option>
                    </select>
                  </div>
                  <button className='pagar'>Pague agora</button>{' '}
                </>
              ) : (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>12/11/2020</td>
                        <td>R$ 79,90</td>
                        <td>Pagamento da internet</td>
                      </tr>
                      <tr>
                        <td>10/11/2020</td>
                        <td>R$ 1.000,00</td>
                        <td>Depósito por boleto</td>
                      </tr>
                      <tr>
                        <td>28/10/2020</td>
                        <td>R$ 900,00</td>
                        <td>Bananas</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transacoes;
