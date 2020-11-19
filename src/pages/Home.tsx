import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidemenu from '../components/Sidemenu';
import { RiRecordCircleFill } from 'react-icons/ri';

import '../styles/pages/home.css';
import { PieChart } from 'react-minimal-pie-chart';

const Home: React.FC = () => {
  return (
    <div id='home'>
      <Sidemenu />
      <div className='homeContent'>
        <Header />
        <div className='content'>
          <div className='chartContainer'>
            <PieChart
              animate={true}
              lineWidth={30}
              animationDuration={1500}
              data={[
                { title: 'disponivel', value: 800, color: '#17ACE6' },
                { title: 'retido', value: 1000, color: '#1880E2' },
              ]}
            />
          </div>
          <div className='valuesContainer'>
            <div className='itemContainer'>
              <RiRecordCircleFill color='#17ACE6' />
              <div className='valueContainer'>
                <span className='label'>Valor Disponível:</span>
                <span className='value'>R$ 800,00</span>
              </div>
            </div>
            <div className='itemContainer'>
              <RiRecordCircleFill color='#1880E2' />
              <div className='valueContainer'>
                <span className='label'>Valor Retido:</span>
                <span className='value'>R$ 1.000,00</span>
              </div>
            </div>
            <div className='itemContainer'>
              <div className='valueContainer'>
                <span className='labelPatrimonio'>Patrimônio Total:</span>
                <span className='valuePatrimonio'>R$ 1.300,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
