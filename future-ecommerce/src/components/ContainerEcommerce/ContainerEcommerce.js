import React from 'react'
import styled from "styled-components"
import ContainerFiltro from '../ContainerFiltro/ContainerFiltro'
import ContainerProdutos from '../ContainerProdutos/ContainerProdutos'
import ContainerCarrinho from '../ContainerCarrinho/ContainerCarrinho'


const MainContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100vh;
`
const ImgCarrinho =styled.img`
    position: fixed;
    bottom:0;
    right:0;
    margin:20px;
    padding:4px;
    border:1px solid black;
    border-radius:50%; 
    height:75px;
    background-color: white;
`;

const arrayDeProdutos = [
    { id: 1,
    name: "Sputnik-1" ,
    price: 500.00,
    imgURL: "https://img2.gratispng.com/20180711/cbe/kisspng-sputnik-1-satellite-sputnik-2-sputnik-program-direct-message-5b46c72f40f7a8.2412530515313651672661.jpg"},
    
    { id: 2,
    name: "DMSPF 13",
    price: 200.00,
    imgURL: "https://spacenews.com/wp-content/uploads/2015/02/DMSP-USAF-879x485.jpg" },
    
    { id: 3,
    name: "Telescópio Hubble",
    price: 400.00,
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/The_Hubble_Space_Telescope_in_orbit.tif/lossy-page1-800px-The_Hubble_Space_Telescope_in_orbit.tif.jpg" },
    
    { id: 4,
    name: "SCD1" ,
    price: 900.00,
    imgURL: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/09/SCD-1.jpg/300px-SCD-1.jpg" },
    
    { id: 5,
    name: "International Space Station",
    price: 950.00,
    imgURL: "https://d2v9ipibika81v.cloudfront.net/uploads/sites/32/2016/10/ISS_orbit-1068x729-1068x684.jpg"},
    
    { id: 6,
    name: "SpaceX",
    price: 210.50,
    imgURL: "https://ciberia.com.br/wp-content/uploads/2017/05/612cd3bca888734ca843c6eb30f0e089-783x450.jpeg?x16490"},
    
    { id: 7,
    name: "Explorer1" ,
    price: 120.0,
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/7/73/Explorer1.jpg"},
    
    { id: 8,
    name: "Corona",
    price: 150.00,
    imgURL: "https://www.theblackvault.com/documentarchive/wp-content/uploads/2015/03/SI-97-15881-10h.jpg"},
]

class ContainerEcommerce extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaProdutos: arrayDeProdutos,
            listaCarrinho: [],
            totalCarrinho:0.00,
            estadoCarrinho:false
        }
    }

    componentDidMount(){
        const arrCarrinhoStorage = JSON.parse(localStorage.getItem('arrCarrinho')) != null ?  JSON.parse(localStorage.getItem('arrCarrinho')) : []
        const valorCarrinhoStorage = localStorage.getItem('valorCarrinho') != null ?  localStorage.getItem('valorCarrinho') : 0.00

        this.setState({
            listaCarrinho:arrCarrinhoStorage,
            totalCarrinho:valorCarrinhoStorage
        })
    }

    componentDidUpdate(){
        localStorage.setItem("arrCarrinho",JSON.stringify(this.state.listaCarrinho))
        localStorage.setItem("valorCarrinho",this.state.totalCarrinho)
    }

    filtrarProdutos = (arg1, arg2, arg3) => {
        const listaProdutosCopia = arrayDeProdutos
        let listaProdutosFiltrada = listaProdutosCopia.filter( cadaProduto => {
            return cadaProduto.price > arg1
        })
        listaProdutosFiltrada = listaProdutosFiltrada.filter( cadaProduto => {
            return cadaProduto.price < arg2
        })
        if (arg3 !== "") {
            listaProdutosFiltrada = listaProdutosFiltrada.filter( cadaProduto => {
                /* busca convertendo o campo de busca e o argumento para minúsculas */
                /* [link: https://stackoverflow.com/questions/35248292/reactjs-tolowercase-is-not-a-function] */
                return cadaProduto.name.toLocaleLowerCase().includes(arg3.toLocaleLowerCase())
        })}
        this.setState({listaProdutos: listaProdutosFiltrada})
    }

    listarItensCarrinho = (idProduto) => {
        const listaCarrinhoCopia = [...this.state.listaCarrinho]
        if (listaCarrinhoCopia.length === 0) {
            const indexDoItem = arrayDeProdutos.findIndex (produto => {
                return produto.id === idProduto
            })
            const novoItemCarrinho =
                { id: arrayDeProdutos[indexDoItem].id,
                    quantidade: 1,
                    nome: arrayDeProdutos[indexDoItem].name,
                    preco: arrayDeProdutos[indexDoItem].price
                }
            listaCarrinhoCopia.push(novoItemCarrinho)
        } else {
            const indexDoItemCarrinho = listaCarrinhoCopia.findIndex (produto => {
                return produto.id === idProduto})

                if (indexDoItemCarrinho>= 0 ) {
                    listaCarrinhoCopia[indexDoItemCarrinho].quantidade += 1
                } else {
                    const indexDoItem = arrayDeProdutos.findIndex (produto => {
                        return produto.id === idProduto
                    })
                    const novoItemCarrinho = {id: arrayDeProdutos[indexDoItem].id,
                        quantidade: 1,
                        nome: arrayDeProdutos[indexDoItem].name,
                        preco: arrayDeProdutos[indexDoItem].price}
                    listaCarrinhoCopia.push(novoItemCarrinho)
                }
            
        }

        this.setState({ listaCarrinho: listaCarrinhoCopia,
        },()=>{
            this.atualizarPrecoTotal()
        })
    }

    atualizarPrecoTotal =() =>{
        let totalCarrinhoCopia = 0
        const listaCarrinhoCopia = [...this.state.listaCarrinho]
        for (const item of listaCarrinhoCopia){
            totalCarrinhoCopia += item.preco*item.quantidade
        }
        this.setState({totalCarrinho: totalCarrinhoCopia})
    }

    removerProduto = (idProduto) =>{
        const listaCarrinhoCopia = [...this.state.listaCarrinho]
        const indexARemover = listaCarrinhoCopia.findIndex(produto =>{
            return produto.id === idProduto
        })

        listaCarrinhoCopia.splice(indexARemover,1)

        this.setState({listaCarrinho:listaCarrinhoCopia},() =>{
            this.atualizarPrecoTotal()
        })
    }

    sortProdutos = (value) =>{
        let listaProdutosCopia = [...this.state.listaProdutos]

        if(value==="decrescente"){
            listaProdutosCopia.sort(function(a,b){
                return parseFloat(a.price) > parseFloat(b.price) ? -1 : parseFloat(a.price) < parseFloat(b.price) ? 1 : 0
            })  
        }else if(value==="crescente"){
            listaProdutosCopia.sort(function(a,b){
            return parseFloat(a.price) > parseFloat(b.price) ? 1 : parseFloat(a.price) < parseFloat(b.price) ? -1 : 0
        
            })
        } else{
            listaProdutosCopia=[...arrayDeProdutos]
        }

        this.setState({
            listaProdutos:listaProdutosCopia
        })
        console.log(this.state.listaProdutos)
    }

    aparecerCarrinho = () =>{
        let estadoCarrinhoCopia = this.state.estadoCarrinho
        estadoCarrinhoCopia = !estadoCarrinhoCopia
        this.setState({
            estadoCarrinho :estadoCarrinhoCopia
        })
    }

    render(){
        return(
            <MainContainer>
                <ContainerFiltro transporteDeFiltros={this.filtrarProdutos} listaDosProdutos={this.state.listaProdutos} />
                <ContainerProdutos organizaProdutos={this.sortProdutos} mostrarItensCarrinho ={this.listarItensCarrinho} listaDosProdutos={this.state.listaProdutos}  />
                {this.state.estadoCarrinho && 
                <ContainerCarrinho removeItem={this.removerProduto} valorTotal={this.state.totalCarrinho} listaItensCarrinho={this.state.listaCarrinho}/>}
                <ImgCarrinho onClick={this.aparecerCarrinho} src="https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-03-512.png"/>
            </MainContainer>
        )
    }
}

export default ContainerEcommerce;