import React, { useState } from 'react';

import '../../styles/pages/investimentos/investimentos.css';

import Sidemenu from '../../components/Sidemenu';
import Header from '../../components/Header';

const Investimentos: React.FC = () => {
  const [opcao, setOpcao] = useState(1);

  return (
    <div id='investimentos'>
      <Sidemenu />
      <div className='investimentosContent'>
        <Header />
        <div className='content'>
          <div className='ativosContainer'>
            <div className='abas'>
              <span
                className={opcao === 1 ? 'aba active' : 'aba'}
                onClick={() => setOpcao(1)}
              >
                Investir
              </span>
              <span
                className={opcao === 2 ? 'aba active' : 'aba'}
                onClick={() => setOpcao(2)}
              >
                Investimento Disponível
              </span>
              <span
                className={opcao === 3 ? 'aba active' : 'aba'}
                onClick={() => setOpcao(3)}
              >
                Investimento Retido
              </span>
            </div>
            <div className='cardsContainer'>
              {opcao === 1 && (
                <>
                  <div className='card'>
                    <h1 className='cardTitle'>Bitcoin</h1>
                    <span className='cardQuantidade'>Quant: 20</span>
                    <span className='cardValor'>R$1.000,00</span>
                    <p className='cardDescription'>
                      Recomendado a curto, médio ou longo prazo, porém o risco é
                      alto.
                    </p>
                  </div>
                  <div className='card'>
                    <h1 className='cardTitle'>Bitcoin</h1>
                    <span className='cardQuantidade'>Quant: 20</span>
                    <span className='cardValor'>R$1.000,00</span>
                    <p className='cardDescription'>
                      Recomendado a curto, médio ou longo prazo, porém o risco é
                      alto.
                    </p>
                  </div>
                  <div className='card'>
                    <h1 className='cardTitle'>Bitcoin</h1>
                    <span className='cardQuantidade'>Quant: 20</span>
                    <span className='cardValor'>R$1.000,00</span>
                    <p className='cardDescription'>
                      Recomendado a curto, médio ou longo prazo, porém o risco é
                      alto.
                    </p>
                  </div>
                  <div className='card'>
                    <h1 className='cardTitle'>Bitcoin</h1>
                    <span className='cardQuantidade'>Quant: 20</span>
                    <span className='cardValor'>R$1.000,00</span>
                    <p className='cardDescription'>
                      Recomendado a curto, médio ou longo prazo, porém o risco é
                      alto.
                    </p>
                  </div>
                  <div className='card'>
                    <h1 className='cardTitle'>Bitcoin</h1>
                    <span className='cardQuantidade'>Quant: 20</span>
                    <span className='cardValor'>R$1.000,00</span>
                    <p className='cardDescription'>
                      Recomendado a curto, médio ou longo prazo, porém o risco é
                      alto.
                    </p>
                  </div>
                  <div className='card'>
                    <h1 className='cardTitle'>Prata</h1>
                    <span className='cardQuantidade'>Quant: 10</span>
                    <span className='cardValor'>R$800,00</span>
                    <p className='cardDescription'>
                      Recomendado a longo prazo.
                    </p>
                  </div>
                  <div className='card'>
                    <h1 className='cardTitle'>Ouro</h1>
                    <span className='cardQuantidade'>Quant: 2</span>
                    <span className='cardValor'>R$200,00</span>
                    <p className='cardDescription'>
                      Recomendado a longo médio prazo.
                    </p>
                  </div>
                </>
              )}
              {opcao === 2 && (
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
                        <td>
                          <button>Resgatar</button>
                        </td>
                      </tr>
                      <tr>
                        <td>10/11/2020</td>
                        <td>R$ 1.000,00</td>
                        <td>Depósito por boleto</td>
                        <td>
                          <button>Resgatar</button>
                        </td>
                      </tr>
                      <tr>
                        <td>28/10/2020</td>
                        <td>R$ 900,00</td>
                        <td>Bananas</td>
                        <td>
                          <button>Resgatar</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )}
              {opcao === 3 && (
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
            <div className='patrimonio'>
              <span className='label'>Patrimônio total:</span>
              <span className='value'>R$6.100,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investimentos;
