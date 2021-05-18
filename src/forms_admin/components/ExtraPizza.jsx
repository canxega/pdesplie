import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../css/botonesForms.css'

const ExtraPizza = () => {

        //-------------------Variables----------------
const [extraPizza, setextraPizza] = useState('')
const [precioextraPizza, setprecioextraPizza] = useState(0)

//----------------Llama la función de insert a la tabla T_ExtrasPizza---------------------------

const submitExtraPizza= (e)=>{
    e.preventDefault()

}
    return (
        <div className="container mt-3">
           <h3>EXTRAS EN LA PIZZA</h3>
            <Form>
                <h4>Ingrese los Extras que pueden incluir las Pizzas</h4>
                
                <Form.Group className="mt-3">
                    <Form.Label>Extra Pizza</Form.Label>
                    <Form.Control
                        className="contenido" 
                        type="text" 
                        placeholder="Extra Pizza"
                        onChange={(e)=>{
                            setextraPizza(e.target.value)
                                    }} />
                </Form.Group>              
                 
                <Form.Group className="mt-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        className="contenido"
                        type="number" 
                        placeholder="Precio Pizza" 
                        onChange={(e)=>{
                            setprecioextraPizza(e.target.value)
                                    }}/>
               </Form.Group>  
           
            
        <Button 
            onClick={submitExtraPizza}
            variant="outline-success" 
            type="submit">
            Registrar
        </Button>
       
        </Form> 
        </div>
    )
}

export default ExtraPizza
