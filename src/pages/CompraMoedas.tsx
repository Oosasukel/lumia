import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidemenu from '../components/Sidemenu';
import { BiBitcoin } from 'react-icons/bi';

import '../styles/pages/moedas.css';
import lumiaLogo from '../images/lumiaIcon.png';
import * as VanillaTiltModule from '../utils/vanilla-tilt.min.js';
const VanillaTilt = VanillaTiltModule.VanillaTilt;

const CompraMoedas: React.FC = () => {
  const [bitcoin, setBitcoin] = useState(true);

  useEffect(() => {
    VanillaTilt();
  }, []);

  return (
    <div id='moedas'>
      <Sidemenu />
      <div className='moedasContent'>
        <Header />
        <div className='content'>
          <div className='moedasContainer'>
            <h1 className='title'>Selecione uma moeda</h1>
            <div className='options'>
              <div
                data-tilt
                className={bitcoin ? 'item active' : 'item'}
                onClick={() => setBitcoin(true)}
              >
                <h2 className='title'>Bitcoin</h2>
                <BiBitcoin className='image' />
                <p className='cotacao'>R$ 86.528,67</p>
              </div>
              <div
                data-tilt
                className={bitcoin ? 'item' : 'item active'}
                onClick={() => setBitcoin(false)}
              >
                <h2 className='title'>Etherium</h2>
                <img src={lumiaLogo} alt='Etherium' className='image' />
                <p className='cotacao'>R$ 21.954,41</p>
              </div>
            </div>
            <input type='text' placeholder='100.00' />
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompraMoedas;
