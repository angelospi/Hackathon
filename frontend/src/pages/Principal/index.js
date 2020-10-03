import React from 'react';

import logo from '../../assets/logo.svg'
import imagem1 from '../../assets/image7.svg'
import imagem2 from '../../assets/Rectangle23.svg'
import imagem3 from '../../assets/image19.svg'
import imagem4 from '../../assets/image8.svg'
import imagem5 from '../../assets/image9.svg'
import imagem6 from '../../assets/image12.svg'
import imagem7 from '../../assets/image13.svg'



import './styles.css';

export default function Principal(){
    return(
        
        <div className="principal-container">
            <section className="form">
            <div className="header">
                <img src={logo} alt="logo" /> 
                <h1 className='sol'>A solução</h1>
                <h1 className='header'>Motivos</h1>
                <h1 className='header'>Entrar</h1>
                <h1 className='header'>Lojas mais próximas</h1>
            </div>

            <div className="imagem_fundo">
                <img src={imagem1} alt="Fundo1" />
            </div>


            <div className="retangulo">
            <img src={imagem2} alt="Fundo1" />
            </div>
            <h1 className="titulo">
                    Solução com Tecnologia
            </h1>
            <h1 className="descricao">
            Oferecemos o uso de <span class="negrito">Tecnologia</span> para 
            nossos serviços, com mais <span class="negrito">qualidade </span>  
            e uma experiência <span class="negrito">única</span> e <span class="negrito">inovadora</span> para nossos clientes.
            </h1>


            <div className="descr_rfid">
                <h1 className="titulo_descr">
                    AUTONOMIA + CONFORTO + INOVAÇÃO 
                </h1>
                <h1 className="decr_rfid">
                Visando trazer mais bem estar aos clientes no retorno das compras presenciais, 
                criamos uma solução para a jornada de compra do consumidor.<br></br>
                Uma tecnologia simples com sensores que agilizará o atendimento aos 
                clientes, com conectividade, otimização de tempo e mais segurança
                </h1>
            </div>

            <img className='rfid' src={imagem3} alt="rfid" />

            <div className="caract_rfid">
                <div className='icon_rfid'>
                <img className="img_rfid" src={imagem4} alt="agilidade" />
                <h1 className="titulo_rfid">Agilidade</h1>
                <h1 className="descr_icon">
                Uma jornada com menos atrito e mais rápida, promovendo autonomia ao cliente
                </h1>
                </div>
                
                <div className='icon_rfid'>
                <img className="img_rfid" src={imagem5} alt="conectividade" />
                <h1 className="titulo_rfid">Conectividade</h1>
                <h1 className="descr_icon">Lojista e clientes sendo conectados através do sistema</h1>
                </div>
                
                <div className='icon_rfid'>
                <img className="img_rfid" src={imagem6} alt="otimizacao" />
                <h1 className="titulo_rfid">Otimização</h1>
                <h1 className="descr_icon">Otimizar o tempo e atendimento dentro das lojas</h1>
                </div>

                <div className='icon_rfid'>
                <img className="img_rfid" src={imagem7} alt="seguranca" />
                <h1 className="titulo_rfid">Segurança</h1>
                <h1 className="descr_icon">Reduz o contato entre pessoas para evitar disseminação de doenças contagiosas</h1>

                </div>
                
                
            </div>

            
            </section>
        </div>
    );
}