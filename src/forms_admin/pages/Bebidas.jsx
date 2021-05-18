import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../css/botonesForms.css'

const Bebidas = () => {
    
        //-------------------Variables----------------
const [bebidaName, setbebidaName] = useState('')
const [precioBebida, setprecioBebida] = useState(0)

//----------------Llama la función de insert a la tabla T_Bebidas---------------------------

const submitBebida= (e)=>{
    e.preventDefault()


    
}
    return (
        <div className="container mt-3">
           <h3>BEBIDAS</h3>
            <Form>
                <h4>Ingrese las Bebidas o refrescos disponibles</h4>
                
                <Form.Group className="mt-3">
                    <Form.Label>Nombre Bebida</Form.Label>
                    <Form.Control
                        className="contenido" 
                        type="text" 
                        placeholder="Nombre Bebida"
                        onChange={(e)=>{
                            setbebidaName(e.target.value)
                                    }} />
                </Form.Group>              
                 
                <Form.Group className="mt-3">
                    <Form.Label>Precio de la Bebida</Form.Label>
                    <Form.Control 
                        className="contenido"
                        type="number" 
                        placeholder="Precio Bebida" 
                        onChange={(e)=>{
                            setprecioBebida(e.target.value)
                                    }}/>
               </Form.Group>  
           
            
        <Button 
            onClick={submitBebida}
            variant="outline-success" 
            type="submit">
            Registrar
        </Button>
       
        </Form> 
        </div>
    )
}

export default Bebidas
