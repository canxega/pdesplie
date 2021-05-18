import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import '../css/botonesForms.css'
import Table from 'react-bootstrap/Table'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const CompCatComida = () => {

 //variable que captura la descripcion de la comida
  const[descricion, setDescriccion]= useState('')
  
  const[descripcionlis, setDeslist]= useState([])

 
  const submitCat = (e) =>{

  e.preventDefault()
Axios.post("http://localhost:9000/api/t_categorias_comida",{
  Descricion: descricion
  });
  
  setDescriccion([
    ...descricion,
    {Descricion: descricion},
    alert("ingreso exitoso")
    
  ]);
  
  
    
  };

  useEffect(() =>{
    Axios.get("http://localhost:9000/api/t_categorias_comida").then((Response)=>{
      setDeslist(Response.data)
    });
    
  }, [])

 

    return (
       
<div className="container mt-3">
        
    {/*----------PARA INSERT EN LA TABLA T_CATEGORIASCOMIDA-------------------*/}
        <form className="form-group">
        <h3>Inserte los tipos de menús o categorías</h3>
        <label>Categoría o tipo de comida</label>
             <input 
                
                id="catingreso"
                className="contenido btn-block mb-3"  
                placeholder="Escriba una categoría o tipo de comida" 
                type='text'
                name='catingreso'
                onChange={(e)=>{
                  setDescriccion(e.target.value)
                }}/>

            <input
                className='btn btn-outline-success'
                value='Agregar categoría'
                type = "submit"
                onClick={submitCat}
                />

{/*-----TABLA responsive en la cual se listarán los registros de la tabla T_CategoriasComida-----*/ } 


<div className="table-responsive-md mt-3">
<h3>Listado de menús o categorías</h3>
<table className="table table-bordered">
<thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">First</th>
      <th scope="col">Editar.</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  {descripcionlis.map(item => {
  return(
<tbody key={item.idT_Categoria_comida}>

  <tr>
 <th>{item.idT_Categoria_comida}</th>
            <td >{item.Descricion}</td>
            <td >Editar</td>
            <td >Eliminar</td>
  </tr>
 
</tbody>
 )
})}
</table>
</div>

        
      </form>

      



   
 




        </div> 

           

    )

      }
export default CompCatComida
