import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

/*---------------FORMULARIO DE REGISTRO PARA LAS SALSAS EXTRAS -------------- */
const FormExtrasSalsa = () => {

 //-------------------Variables----------------
 const [extraSalsa, setextraSalsa] = useState('')
 const [precioextraSalsa, setprecioextraSalsa] = useState(0)
 
 //----------------Llama la función de insert a la tabla T_ExtrasDesayunos---------------------------
 
 const submitExtraSalsa= (e)=>{
     e.preventDefault()
 
 }
    return (
        <div className="container  mt-3">
            <h3>SALSAS EXTRAS</h3>
            <Form>
                <h4>Ingrese las Salsas Extras </h4>
                
                <Form.Group className="mt-3">
                    <Form.Label>Nombre Salsa Extra</Form.Label>
                    <Form.Control
                        className="contenido" 
                        type="text" 
                        placeholder="Nombre salsa extra"
                        onChange={(e)=>{
                            setextraSalsa(e.target.value)
                                    }} />
                </Form.Group>              
                 
                <Form.Group className="mt-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        className="contenido"
                        type="number" 
                        placeholder="Precio salsa extra" 
                        onChange={(e)=>{
                            setprecioextraSalsa(e.target.value)
                                    }}/>
               </Form.Group>  
           
            
        <Button 
            onClick={submitExtraSalsa}
            variant="outline-success" 
            type="submit">
            Registrar
        </Button>
       
        </Form>
        </div>
    )
}

export default FormExtrasSalsa
