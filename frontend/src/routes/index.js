import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Perfil from '../pages/Perfil';
import Detalhes from '../pages/Detalhes';
import Create from '../pages/Novo-Editar/Create';
import Editar from '../pages/Novo-Editar/Edit';

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/cadastrar" component={SignUp} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/perfil" isPrivate component={Perfil} />
      <Route path="/detalhes/:id" exact isPrivate component={Detalhes} />
      <Route path="/meetup/criar" isPrivate component={Create} />
      <Route path="/meetup/:id/editar" isPrivate component={Editar} />
    </Switch>
  );
}
