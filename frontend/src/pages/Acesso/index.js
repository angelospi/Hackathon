import React from 'react';
import './styles.css';
import logo from '../../assets/logo.svg'
import hist from '../../assets/icon_hist.svg'
import sistema from '../../assets/icon_sis.svg'
import perfil from '../../assets/icon_perfil.svg'
import logobag from '../../assets/BAG5.png'


export default function Acesso(){
    return(
        
        <div className="acesso-container">
            <section className="header">
            <img src={logobag} alt="Logo" />
            <img src={logo} alt="Logo" />
            
            </section>

            <div className='header'>
                <h1 className='menu'>MENU</h1>
                <h1 className='conf'>CONFIGURAÇÕES</h1>
                <h1 className='sair'>Sair</h1>
            </div>

            <h1 className='ola'>Olá, seja bem-vindo !</h1>

            <section classname='corpo'>
            <div className='hist'>
            <h1 className='hist'>HISTÓRICO DE VENDAS</h1>
            
            <img src={hist} alt="Icone" />
            </div>

            <div className='sistema'>
            <h1 className='hist'>SISTEMA INTEGRADO</h1>

            <img src={sistema} alt="Icone_sis" />
            </div>

            <div className='perfil'>
            <h1 className='hist'>PERFIL DO CLIENTE</h1>
            
            <img src={perfil} alt="Icone_sis" />
            </div>

            </section>
        </div>


    );
}