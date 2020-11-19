import React, { useState } from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { GiExitDoor } from 'react-icons/gi';

import '../styles/components/header.css';
import SidemenuModal from './SidemenuModal';

const Header: React.FC = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div id='header'>
      <SidemenuModal openMenuState={[openMenu, setOpenMenu]} />
      <MdMenu className='openMenu' onClick={() => setOpenMenu(!openMenu)} />
      <div className='headerOptions'>
        <Link to='/saldo'>
          <div className='saldo'>
            <FaMoneyBill />
            <span>100.00</span>
          </div>
        </Link>
        <Link
          to='/perfil'
          className={
            location.pathname === '/perfil' ? 'perfil active' : 'perfil'
          }
        >
          Meu Perfil
        </Link>
        <Link to='/login'>
          <GiExitDoor className='exitSvg' />
        </Link>
      </div>
    </div>
  );
};

export default Header;
