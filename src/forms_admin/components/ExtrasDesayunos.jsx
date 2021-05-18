import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../css/botonesForms.css'

/*---------------FORMULARIO DE REGISTRO PARA LOS EXTRAS QUE INCLUYE EL DESAYUNO-------------- */
const FormExtrasDesayunos = () => {

    //-------------------Variables----------------
const [extraDesayuno, setextraDesayuno] = useState('')
const [precioextraDesay, setprecioextraDesay] = useState(0)

//----------------Llama la función de insert a la tabla T_ExtrasDesayunos---------------------------

const submitExtraDesay= (e)=>{
    e.preventDefault()

}


    return (
        <div className="container mt-3" >
           
        <h3>EXTRAS DESAYUNO</h3>
            <Form>
                <h4>Ingrese los Extras que incluyen los Desayunos</h4>
                
                <Form.Group className="mt-3">
                    <Form.Label>Extra Desayuno</Form.Label>
                    <Form.Control
                        className="contenido" 
                        type="text" 
                        placeholder="Extra Desayuno"
                        onChange={(e)=>{
                            setextraDesayuno(e.target.value)
                                    }} />
                </Form.Group>              
                 
                <Form.Group className="mt-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        className="contenido"
                        type="number" 
                        placeholder="Precio" 
                        onChange={(e)=>{
                            setprecioextraDesay(e.target.value)
                                    }}/>
               </Form.Group>  
           
            
        <Button 
            onClick={submitExtraDesay}
            variant="outline-success" 
            type="submit">
            Registrar
        </Button>
       
        </Form>


        

    </div>
    )
}

export default FormExtrasDesayunos
