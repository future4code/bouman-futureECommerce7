import React from 'react'
import styled from "styled-components"

const MainContainer = styled.div`
    border: 1px solid #878787;
    width: 15%;
    border-radius:5px;
    height:175px;
    margin:5px;
`

const TituloContainer = styled.div`
    background-color: #F9F8F8;
    height: 30px;
    justify-content:space-between;
    display:flex;
    align-items:center;
    border-radius:5px;
    padding:0 10px;
    margin-bottom:10px;
`;
const TituloTexto = styled.p`
    font-weight:bold; 
    color:#878787; 
`;

const TextoTotal = styled.p`
    padding: 10px;
`;

const ItensNoCarrinho = styled.div`
    border-bottom: 1px dashed black;
    display: flex;
    padding: 5px;
    margin: 0 5px;
`

const TextoItem = styled.p`
    margin-right: 20px;

`

const RemoveItem = styled.p`
    cursor:pointer;
    &:hover {color: red}
`



function ContainerCarrinho(props) {
    return (
        <MainContainer>
            <TituloContainer>
                <TituloTexto>Carrinho</TituloTexto>
                <TituloTexto>―</TituloTexto>
            </TituloContainer>

            {props.listaItensCarrinho.map( produto => {
                return (
                    <ItensNoCarrinho>
                        <TextoItem>{produto.quantidade}X {produto.nome}</TextoItem>
                        <RemoveItem onClick={() =>{props.removeItem(produto.id)}}>X</RemoveItem>
                    </ItensNoCarrinho>
                )
             } )}

            <TextoTotal>
                Total: <b>R${parseFloat(props.valorTotal).toFixed(2)}</b>
            </TextoTotal>

        </MainContainer>
    )

}

export default ContainerCarrinho;