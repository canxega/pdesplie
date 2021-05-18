import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../css/botonesForms.css'

/*---------------FORMULARIO DE REGISTRO OTROS ALIMENTOS EXTRAS-------------- */

const ExtrasOtros = () => {
    const [otroExtra, setotroExtra] = useState('')
    const [preciootroExtra, setpreciootroExtra] = useState(0)

    const submitOtroExtra= (e)=>{
        e.preventDefault()
    
    }

    return (
        <div className="container mt-3">
            <h3>OTRAS OPCIONES EXTRAS DE ACOMPAÑAMIENTOS</h3>
            <Form>
                <h4>Ingrese Otros Acompañamientos Disponibles</h4>
                
                <Form.Group className="mt-3">
                    <Form.Label>Extra Acompañamiento</Form.Label>
                    <Form.Control
                        className="contenido" 
                        type="text" 
                        placeholder="Extra Acompañamiento"
                        onChange={(e)=>{
                            setotroExtra(e.target.value)
                                    }} />
                </Form.Group>              
                 
                <Form.Group className="mt-3">
                    <Form.Label>Precio Otro Acompañamiento</Form.Label>
                    <Form.Control 
                        className="contenido"
                        type="number" 
                        placeholder="Precio Otro Acompañamiento" 
                        onChange={(e)=>{
                            setpreciootroExtra(e.target.value)
                                    }}/>
               </Form.Group>  
           
            
        <Button 
            onClick={submitOtroExtra}
            variant="outline-success" 
            type="submit">
            Registrar
        </Button>
       
        </Form>
        </div>
    )
}

export default ExtrasOtros
