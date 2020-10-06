import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Login from './pages/Login';
import Principal from './pages/Principal';
import Acesso from './pages/Acesso';
import Carrinho from './pages/Carrinho';

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/principal"  component={Principal}/>
            <Route path="/carrinho"  component={Carrinho}/>
            <Route path="/acesso"  component={Acesso}/>
        </Switch>
        </BrowserRouter>
    )
}