import React from 'react';

import logo from '../../assets/logo.svg'
import logobag from '../../assets/BAG5.png'



import './styles.css';

export default function Login(){
    return(
        
        <div className="login-container">
            <section className="header">
                <img src={logobag} alt="Logo" />
                <img src={logo} alt="Logo" />

            </section>
            
            <div className='header'>
           
                <h1 className='menu'>MENU</h1>
                <h1 className='conf'>CONFIGURAÇÕES</h1>
                <h1 className='sair'>Sair</h1>
            </div>

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