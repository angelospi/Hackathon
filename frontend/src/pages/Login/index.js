import React from 'react';

import logo from '../../assets/logo.svg'
import Header from '../../Header'


import './styles.css';

export default function Login(){
    return(
        
        <div className="login-container">
            <Header>
            </Header>
            <section className="form">
            
            <img src={logo} alt="Logo Natura" />

            <h1 class="Entrar">Entrar</h1>

            <form>
                <h1>IDENTIFICAÇÃO</h1>
                <input placeholder=""/>

                <h1>SENHA</h1>

                <input placeholder=""/>

                <button className ="submit" type="submit">ENTRAR</button>

                <button className ="cadastrar" type="cadastrar">CADASTRAR</button>
            </form>
            </section>
        </div>
    );
}