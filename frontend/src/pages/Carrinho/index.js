import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg'
import perfume from '../../assets/KAIAK1.svg'
import icone1 from '../../assets/image17.svg'
import icone2 from '../../assets/image6.svg'
import logobag from '../../assets/BAG5.png'


import './styles.css';


export default function Carrinho(){
    const produtos = [
        {
            rfid: '829611826',
            nome: 'Sabonete Natura 1',
            price: 15.00,
            img: perfume
        },
        {
            rfid: '57134196126',
            nome: 'Sabonete Natura 2',
            price: 15.00,
            img: perfume
        },
        {
            rfid: '18536228194',
            nome: 'Sabonete Natura 3',
            price: 15.00,
            img: perfume
        },
        {
            rfid: '20213618821',
            nome: 'Sabonete Natura 3',
            price: 15.00,
            img: perfume
        }
    ];
    let contador = 1;
    const [queues, setQueue] = useState([]);
    const [venda, setVenda] = useState([]);
    const [total, setTotal] = useState([]);
    const [removeVenda, setremoveVenda] = useState("");


    useEffect(() => {
        handleQueueAdd();
    }, []);

    async function handleQueueAdd(){
        try{
            let query = 'SELECT * FROM natubag_product WHERE status = \'INCL\'';
        api.get('api/v1/data/query',
                {params: {sql: query}})
                .then(response =>{
                    console.log(response.data);
                    setQueue(response.data);
                });
        }catch(err){

        }
    }

    async function handleQueueRemove(id){
        try{
            let query = `UPDATE natubag_queue SET status = \'BAIX\' WHERE _eugenio_id = \'${id}\' AND status = \'INCL\'`;
        api.get('api/v1/data/query',
                {params: {sql: query}})
                .then(response =>{
                    console.log(response.data);
                });
        }catch(err){

        }
    }

    async function handleProductAdd(rfid){
        console.log("entrou aqui");
        try{
            let query = `SELECT * FROM natubag_product WHERE status = \'INCL\' AND deviceid = \'${rfid}\' ORDER BY _eugenio_created_at`;
        api.get('api/v1/data/query',
                {params: {sql: query}})
                .then(response =>{
                    console.log("retornou dados");
                    let prod = response.data;
                    let retProducts = [];
                    let total = 0;
                    for(let i = 0; i < prod.length; i++){
                        let product = produtos.find((e) => e.rfid == prod[i].product_rfid);
                        total = total + product.price
                        retProducts.push(product);
                        setremoveVenda(prod[i].deviceid);
                    }
                    console.log(retProducts);
                    console.log(total);
                    setVenda(retProducts);
                    setTotal(total);
                    document.getElementById('btnVenda').style.display = 'block';
                });
        }catch(err){

        }
    }

    async function handleProductRemove(id, deviceid){
        try{
            let query = `UPDATE natubag_product SET status = \'BAIX\' WHERE _eugenio_id = \'${id}\' AND status = \'INCL\'`;
            api.get('api/v1/data/query',
                    {params: {sql: query}})
                    .then(response =>{
                        console.log(response.data);
                        handleInativeDevice(deviceid);
                    });
        }catch(err){
            console.log(err);
        }
    }

    async function handleInativeDevice(id){
        try{
        api.post(`api/v1/things/${id}/invoke`,
                {method: "INATTENDANCE", payload: "FINALIZED", timeout: 100},
                {'content-type': "application/json"})
                .then(response =>{
                    console.log(response.data);
                });
        }catch(err){

        }
    }

    async function handleDeviceRemove(id){
        try{
            let query = `UPDATE natubag_dispo SET active = \'true\' WHERE _eugenio_id = \'${id}\' AND active = \'false\'`;
        api.get('api/v1/data/query',
                {params: {sql: query}})
                .then(response =>{
                    console.log(response.data);
                });
        }catch(err){

        }
    }
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

                {
                    queues.map(item => (
                        <div className="cliente" onClick={ () => handleProductAdd(item.deviceid)}>
                            <h1>{item.id_device}</h1>
                            <h1 className="posicao">
                                {contador}
                            </h1>
                        </div>
                        
                    ),contador++)
                }
            </section>

            <section className="carrinho">
                <div className="cabecalho">
                    <img className="icone_carr" src={icone2} alt="Logo" />
                    <h1>Carrinho de compras</h1>
                    <h1>Descrição dos produtos</h1>
                </div>
            
                <ul id="allprodutos" style={{'padding': '-5px'}}>
                    {
                        venda.map(item => (
                            <div className="produtos">
                                <div className="nome">
                                    <h1>Angelo Spinardi Netto</h1>
                                </div>
                                <img className="kaiak" src={item.img} alt="Logo" />
                                <h1>1 X</h1>
                                <h1 className="nome">{item.nome}</h1>
                                <h1 className="preco">R${item.price}</h1>
                            </div>
                        ))
                    }
                </ul>
                <button id="btnVenda" style={{'display': 'none'}} type="button" onClick={ () => handleInativeDevice(removeVenda)}> Pagar </button>
                
                </section>
            </section>
            </div>

            
           
    );
}