import React, { Component } from 'react';

class Buscador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bebidas: [
                {   
                    valor: 'casera',
                    nombre: 'Tinto La Casera',
                    precio: '4€',
                    img:'imagenes/tinti-casera.jpg'
                },
                {   
                    valor: 'simon',
                    nombre: 'Tinto Don Simón',
                    precio: '3€',
                    img:'imagenes/tinti-simon.jpg'
                },
                {
                    valor: 'ladron',
                    nombre: 'Ladrón de Manzanas',
                    precio: '3.5€',
                    img: 'imagenes/ladron-manzanas.jpg'
                }
            ],
            seleccionado: {
                nombre: 'Nombre de la bebida',
                precio: ' ',
                img: ' '
            },
            resultado: {
                nombre: 'Nombre de la bebida',
                precio: ' ',
                img: ' '
            }
            
        }
        console.log(props)
        
    }

    precioElegido(e) {
        this.setState({
            ...this.state,
            seleccionado: this.buscarObjeto(e.target.value)
        })
        console.log(this.state.seleccionado) // Devuelve el objeto seleccionado
        console.log(e.target.value) //Te devuelve el objeto
        console.log(this.buscarObjeto(e.target.value)) //Te devuelve el objeto cuyo valor has buscado

    }

    buscarObjeto(nombre) {
        console.log(nombre)
        return(this.state.bebidas.find(e => e.valor === nombre))
    }

    
    elegido(event) {
        this.setState({
            ...this.state,
            resultado: this.state.seleccionado,
        })
        console.log('elegido:')
        console.log(this.state.seleccionado.precio)
        
    
    }



    render() {
        return( 
            <div>
                <select onClick={e => this.precioElegido(e)}>

                    {this.state.bebidas.map(elemento => <option value={elemento.valor}>{elemento.nombre}</option>)}

                </select>


                <p>
                    Total: {this.state.seleccionado.precio}
                    {/* Total: {this.props.food} Props facil */}
                    
                </p>
                <button onClick={event => this.elegido(event)}>AÑADE TU BEBIDA</button>
                        <div>
                           
                           <p>{this.state.resultado.nombre}</p>
                            <img className="image" src={this.state.resultado.img} alt='imagen'></img>
                            <p>{this.state.resultado.precio}</p> 
                            
                            
                        </div>

            </div>
        )
    }
}

export default Buscador;