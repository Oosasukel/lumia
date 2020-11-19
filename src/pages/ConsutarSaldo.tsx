import React from 'react';
import { FaFilter } from 'react-icons/fa';
import Header from '../components/Header';
import Sidemenu from '../components/Sidemenu';

import '../styles/pages/consultar-saldo.css';

const ConsultarSaldo: React.FC = () => {
  return (
    <div id='consultarSaldo'>
      <Sidemenu />
      <div className='consultarSaldoContent'>
        <Header />
        <div className='content'>
          <div className='saldoContainer'>
            <div className='movimentacoes'>
              <div className='filterContainer'>
                <div className='filterContent'>
                  <FaFilter />
                  <span>Período</span>
                </div>
                <input type='date' id='dateStart' />
                <span>à</span>
                <input type='date' id='dateEnd' />
              </div>
              <h1 className='title'>Movimentações</h1>
              <div className='movimentacoesItems'>
                <span className='movimentacaoItem'>
                  <span className='date'>03/10</span>
                  <span className='value'>R$ 80.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>04/10</span>
                  <span className='value'>R$ 50.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>03/10</span>
                  <span className='value'>R$ -25.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>03/10</span>
                  <span className='value'>R$ 40.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>03/10</span>
                  <span className='value'>R$ 80.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>04/10</span>
                  <span className='value'>R$ 50.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>03/10</span>
                  <span className='value'>R$ -25.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>03/10</span>
                  <span className='value'>R$ 40.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>03/10</span>
                  <span className='value'>R$ 80.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>04/10</span>
                  <span className='value'>R$ 50.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>03/10</span>
                  <span className='value'>R$ -25.00</span>
                </span>
                <span className='movimentacaoItem'>
                  <span className='date'>03/10</span>
                  <span className='value'>R$ 40.00</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultarSaldo;
