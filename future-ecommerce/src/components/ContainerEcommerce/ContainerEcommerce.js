import React from 'react'
import styled from "styled-components"
import ContainerFiltro from '../ContainerFiltro/ContainerFiltro'
import ContainerProdutos from '../ContainerProdutos/ContainerProdutos'
import ContainerCarrinho from '../ContainerCarrinho/ContainerCarrinho'

const MainContainer = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    height: 100vh;
`

function ContainerEcommerce() {
 return(
     <MainContainer>
        <ContainerFiltro />
        <ContainerProdutos />
        <ContainerCarrinho />
     </MainContainer>
 )
}

export default ContainerEcommerce;