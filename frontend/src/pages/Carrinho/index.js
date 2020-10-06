import React from 'react';

import logo from '../../assets/logo.svg'
import perfume from '../../assets/KAIAK1.svg'
import icone1 from '../../assets/image17.svg'
import icone2 from '../../assets/image6.svg'
import logobag from '../../assets/BAG5.png'
import grupo from '../../assets/Group_14.svg'


import './styles.css';

export default function Login(){
    return(
        
        <div className="carrinho-container">
            <section className="header">
                <img src={logobag} alt="Logo" />
                <img src={logo} alt="Logo" />
                
            </section>

            <div className='header'>
                <a className='menu' href="/principal">MENU</a>
                <h1 className='conf'>CONFIGURAÇÕES</h1>
                <h1 className='sair'>Sair</h1>
            </div>
            <section className="body">
            <section className="fila">
            <div className="fila">
                <img src={icone1} alt="Logo" />
                <h1>FILA DO CAIXA</h1>
            </div>

            <div className="cliente">
                <h1>
                    Angelo Spinardi Netto
                </h1>
                <h1 className="preco">
                    R$79,90
                </h1>
                <h1 className="posicao">
                    1º
                </h1>
            </div>
            <div className="cliente">
                <h1>
                    Mayara Pereira
                </h1>
                <h1 className="preco">
                    R$177,00
                </h1>
                <h1 className="posicao">
                    2º
                </h1>
            </div>
            <div className="cliente">
                <h1>
                    Maria Aparecida
                </h1>
                <h1 className="preco">
                    R$149,99
                </h1>
                <h1 className="posicao">
                    3º
                </h1>
            </div>
            <div className="cliente">
                <h1>
                    Clarisse Almeida
                </h1>
                <h1 className="preco">
                    R$203,59
                </h1>
                <h1 className="posicao">
                    4º
                </h1>
            </div>
            <div className="cliente">
                <h1>
                    Pedro Costa
                </h1>
                <h1 className="preco">
                    R$82,99
                </h1>
                <h1 className="posicao">
                    5º
                </h1>
            </div>

            </section>

            <section className="carrinho">

            <img className="grupo" src={grupo} alt="Logo"/>
                
            </section>
                
            </section>
            </div>
           
    );
}