import React from 'react'
import styled from "styled-components"
import ProdutoUnico from '../ContainerProdutos/ProdutoUnico'

const MainContainer = styled.div`
    border: 1px solid purple;
    width: 65%;
`

function ContainerProdutos() {
    return (
        <MainContainer>
            Container de Produtos
            <ProdutoUnico />
        </MainContainer>
    )

}

export default ContainerProdutos;