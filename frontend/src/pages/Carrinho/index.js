import React from 'react';

import logo from '../../assets/logo.svg'
import perfume from '../../assets/KAIAK1.svg'
import icone1 from '../../assets/image17.svg'
import icone2 from '../../assets/image6.svg'
import logobag from '../../assets/BAG5.png'


import './styles.css';

export default function Login(){
    return(
        
        <div className="carrinho-container">
            <section className="header">
                <img src={logobag} alt="Logo" />
                <img src={logo} alt="Logo" />
                
            </section>

            <div className='header'>
                <h1 className='menu'>MENU</h1>
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
                    1
                </h1>
            </div>
            <div className="cliente">
                <h1>
                    Mayara Pereira
                </h1>
                <h1 className="preco">
                    R$49,99
                </h1>
                <h1 className="posicao">
                    2
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
                    3
                </h1>
            </div>
            <div className="cliente">
                <h1>
                    Clarisse
                </h1>
                <h1 className="preco">
                    R$203,59
                </h1>
                <h1 className="posicao">
                    4
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
                    5
                </h1>
            </div>

            </section>

            <section className="carrinho">
                <div className="cabecalho">
                    <img className="icone_carr" src={icone2} alt="Logo" />
                    <h1>Carrinho de compras</h1>
                    <h1>Descrição dos produtos</h1>
                </div>
            

                <div className="produtos">
                    <div className="nome">
                        <h1>Angelo Spinardi Netto</h1>
                    </div>
                    <img className="kaiak" src={perfume} alt="Logo" />
                    <h1>1 X</h1>
                    <h1 className="nome">Desodorante Colônia Kaiak Pulso Masculino - 100ml</h1>
                    <h1 className="preco">R$79,90</h1>
                    <button >PAGAR</button>
                </div>
                </section>
            </section>
            </div>

            
           
    );
}