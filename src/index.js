import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Header from './components/header'
import Menu from './pages/menu'
import About from './pages/about'
import Mesas from './forms_admin/pages/mesas'
import Sign_in from './pages/sign_in'

import Admin from './forms_admin/pages/Admin'
//formularios para el admin

import formComidayCategorias from './forms_admin/pages/formComidayCategorias'
import Extras from './forms_admin/pages/Extras.jsx';
import Bebidas from './forms_admin/pages/Bebidas.jsx';
import RegCocina from './forms_admin/pages/RegistroCuentaCocina';
import RegMesero from './forms_admin/pages/RegistroCuentaMesero';


import { withRouter } from "react-router";

const HeaderWithRouter = withRouter(Header);


ReactDOM.render(
  
    <Router>
      
     
      <HeaderWithRouter/>
      
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/mesas" component={Mesas} />
        <Route path="/sign_in" component={Sign_in} />

        <Route path="/admin" component={Admin} />
        
        <Route path="/bebidas" component={Bebidas} />
        <Route path="/extras" component={Extras} />

        <Route path="/registro/mesero" component={RegMesero} />
        <Route path="/registro/cocina" component={RegCocina} />
       
        <Route path="/formComidayCategorias" component={formComidayCategorias} />

        <Route exact path="/" component={App} />
        <Route path="*"> 
                <h1 className="container">ERROR 404 NOT FOUND</h1>
        </Route>
        
      </Switch>
    </Router>
    
  ,

  document.getElementById('root')
);