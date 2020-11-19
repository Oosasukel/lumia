import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ConsultarSaldo from './pages/ConsutarSaldo';
import Cadastro from './pages/Cadastro';
import RecuperarSenha from './pages/RecuperarSenha';
import Perfil from './pages/Perfil';
import Investimentos from './pages/Investimentos/Investimentos';
import CompraMoedas from './pages/CompraMoedas';
import Transacoes from './pages/Transacoes';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/recuperarSenha' component={RecuperarSenha} />
        <Route path='/saldo' component={ConsultarSaldo} />
        <Route path='/perfil' component={Perfil} />
        <Route path='/investimentos' component={Investimentos} />
        <Route path='/moedas' component={CompraMoedas} />
        <Route path='/transacoes' component={Transacoes} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
