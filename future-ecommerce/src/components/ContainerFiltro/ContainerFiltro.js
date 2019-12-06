import React, { Component } from 'react'
import styled from 'styled-components'
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

const FiltroContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding-left:15px;

`;

const FiltroInputFalso = styled.div`
    border: 1px solid #878787;
    display:flex;
    width:90%;
    margin-bottom:10px;
    height:20px;
    align-items:center;

`;

const LabelDeInputFalso = styled.label` 
    padding-left:5px;
    color: #878787;
    font-size:0.9em;
`;

const LabelCifraInputFalso = styled.label`
    padding-left:5px;
    color: #878787;
    font-weight:bold;
    margin-right:5px;
    font-size:0.8em;
`;

const FiltroInput = styled.input`
    width:100%;
    margin: 0;
    padding-left:5px;
    border:0;
`;

class ContainerFiltro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formControls:{
                    valorMin: {
                        value:""
                    },
                    valorMax: {
                        value:""
                    },
                    filtro: {
                        value:""
                    },
            },
        }
    }

/* funções */
    /* controle de inputs gerais */    
    controladorInputs = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls:{
                ...this.state.formControls,
                [name]:{
                ...this.state.formControls[name],
                value
                }
            }
        });
        console.log(this.state.formControls)


        
    }



    /* render */

	render(){
		return (
        <MainContainer>
            <TituloContainer>
                <TituloTexto>Filtro</TituloTexto>
                <TituloTexto>―</TituloTexto>
            </TituloContainer>
            <FiltroContainer>
                <FiltroInputFalso>
                    <LabelDeInputFalso>De:</LabelDeInputFalso>
                    <LabelCifraInputFalso>R$</LabelCifraInputFalso>
                    <FiltroInput    type="number" 
                                    name="valorMin"
                                    value={this.state.formControls.valorMin.value}
                                    onChange={this.controladorInputs}
                    />
                </FiltroInputFalso>
                <FiltroInputFalso>
                    <LabelDeInputFalso>Até:</LabelDeInputFalso>
                    <LabelCifraInputFalso>R$</LabelCifraInputFalso>
                    <FiltroInput    type="number" 
                                    name="valorMax"
                                    value={this.state.formControls.valorMax.value}
                                    onChange={this.controladorInputs}
                    />
                </FiltroInputFalso>
            </FiltroContainer>
            <TituloContainer>
                <TituloTexto>Filtro</TituloTexto>
                <TituloTexto>―</TituloTexto>
            </TituloContainer>
            <FiltroContainer>
                <FiltroInputFalso>
                    <LabelDeInputFalso>Busca:</LabelDeInputFalso>
                    <FiltroInput    type="text" 
                                    name="filtro"
                                    value={this.state.formControls.filtro.value}
                                    onChange={this.controladorInputs}
                        />
                </FiltroInputFalso>
            </FiltroContainer>
        </MainContainer>
        )
    }
}
export default ContainerFiltro;