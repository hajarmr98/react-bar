import React, { Component } from 'react';
import Buscador from '../buscador/buscador.js'
// import Resultado from '../resultado/resultado.js'

class Main extends Component {
    constructor(){
        super()//No es necesario
        this.state= { text: 'Holi'}
    }
    passingInfo(info) {
        console.log('passingInfo:')
        console.log(info)
        this.setState({
            ...this.state,
            articulo: info
        })
        
    }
    render(){
        return (
            <div>
                {/* <Buscador  food={this.passingInfo.bind(this)}/> */}
                <Buscador food={this.passingInfo.bind(this)}/>
                {/* <Buscador  food={this.state.text}/> */}
                {/* <Resultado /> */}
            </div>
            )
        }
}             

export default Main; 