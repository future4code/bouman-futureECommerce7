import React, { Component } from 'react'
import styled from 'styled-components'
import RangeSlider from '../Slider/slider.js'


const MainContainer = styled.div`
    border: 1px solid #878787;
    width: 15%;
    border-radius:5px;
    height:220px;
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
                        value: 0
                    },
                    valorMax: {
                        value: 1000
                    },
                    filtro: {
                        value:""
                    },
            },
        }
    }

/* funções */
    /* controle de inputs gerais [link: https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825]*/
    /* copia o formControls e altera somente o valor de acordo com a key name */
    controladorInputs = event => {
        const name = event.target.name;
        const value = event.target.value;

        /* setState usando valor atualizado [link: https://stackoverflow.com/questions/34687091/can-i-execute-a-function-after-setstate-is-finished-updating] */
        this.setState({
            formControls:{
                ...this.state.formControls,
                [name]:{
                ...this.state.formControls[name],
                value
                }
            }
        }, () => {this.props.transporteDeFiltros(this.state.formControls.valorMin.value,
            this.state.formControls.valorMax.value,
            this.state.formControls.filtro.value)
            console.log("funcao aleatoria", this.state.formControls)});
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
                <RangeSlider></RangeSlider>
            </FiltroContainer>
            
            <TituloContainer>
                <TituloTexto>Buscar</TituloTexto>
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