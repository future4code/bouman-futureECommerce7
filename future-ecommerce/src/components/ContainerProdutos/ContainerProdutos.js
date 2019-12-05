import React from 'react'
import styled from "styled-components"
import ProdutoUnico from '../ContainerProdutos/ProdutoUnico'

const MainContainer = styled.div`
    border: 1px solid purple;
    width: 65%;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`

const Conteudo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

function ContainerProdutos(props) {
    return (
        <MainContainer>
            <Header>
                <p>Quantidade de produtos: </p>
                <select>
                    <option>Preço: Crescente</option>
                    <option>Preço: Decrescente</option>
                </select>
            </Header>
            <Conteudo>
            {props.listaDosProdutos.map( cadaProduto => {
                return <ProdutoUnico produtosParaExibir={cadaProduto} />
                })
            }
            </Conteudo>
        </MainContainer>
    )
}

export default ContainerProdutos;