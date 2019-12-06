import React from 'react'
import styled from "styled-components"
import ProdutoUnico from '../ContainerProdutos/ProdutoUnico'

const MainContainer = styled.div`
  
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

class ContainerProdutos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectStatus : "vazio"

        }
    }



    controleFiltro = e => {

        console.log("clicou")
        this.setState({
          selectStatus: e.target.value
        },()=>{
            this.props.organizaProdutos(this.state.selectStatus)
        });
    
    }


    render(){
        return (
            <MainContainer>
                <Header>
                <p>Quantidade de produtos: {this.props.listaDosProdutos.length}</p>
                    <select value={this.state.selectStatus} onChange={this.controleFiltro}>
                    <option value="vazio"></option>
                        <option value="crescente">Preço: Crescente</option>
                        <option value="decrescente">Preço: Decrescente</option>
                    </select>
                </Header>
                <Conteudo>
                {this.props.listaDosProdutos.map( cadaProduto => {
                    return <ProdutoUnico mostrarCarrinho={this.props.mostrarItensCarrinho} produtosParaExibir={cadaProduto} />
                    })
                }
                </Conteudo>
            </MainContainer>
        )
    }
    
}

export default ContainerProdutos;