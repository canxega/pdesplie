import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../css/botonesForms.css'

const FormMesas = () => {

    //-------------------variables-------------------------------------
    const [numberMesa, setnumberMesa] = useState(0)
    const [estadoMesa, setestadoMesa] = useState('')
    const [comentarioMesa, setcomentarioMesa] = useState('')

    const submitMesas= (e)=>{
        e.preventDefault()
    
    }
    
    return (
        
        <>
           <Form>
                <h4>Ingrese las mesas disponibles</h4>
                
                <Form.Group className="mt-3">
                    <Form.Label>Número Mesa</Form.Label>
                    <Form.Control
                        className="contenido" 
                        type="number" 
                        placeholder="Número Mesa"
                        onChange={(e)=>{
                            setnumberMesa(e.target.value)
                                    }} />
                </Form.Group>              
                 
                <Form.Group className="mt-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control 
                        className="contenido"
                        type="text" 
                        placeholder="Disponible, Ocupado, Reservado" 
                        onChange={(e)=>{
                            setestadoMesa(e.target.value)
                                    }}/>
               </Form.Group>

               <Form.Group className="mt-3">
                    <Form.Label>Comentarios u Observaciones</Form.Label>
                    <Form.Control 
                        className="contenido"
                        type="text" 
                        placeholder="Comentarios" 
                        onChange={(e)=>{
                            setcomentarioMesa(e.target.value)
                                    }}/>
               </Form.Group>  
           
            
        <Button 
            onClick={submitMesas}
            variant="outline-success" 
            type="submit">
            Registrar
        </Button>
       
        </Form>

           
        </>
        
       
    )
}

export default FormMesas
