import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/botonesForms.css";
import "../css/formComida.css";
import Table from "react-bootstrap/Table";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const CompComida = () => {
  //variable que devuelve la descripcion de la comida
  const [descripcion, setDescripcion] = useState("");
  const [descripcionlis, setDeslist] = useState([]);
  const [descripciontabla, setDeslisttabla] = useState([]);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    setDescriptionList();
  }, []);

  //variable que captura los datos que se ingresaran a la tabla t_comidas
  const [nombre_comida, setNomcomida] = useState("");
  const [descrip_comida, setDescom] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoriaC_fk, setcategoriaC_fk] = useState([]);

  //funcion para insertar en la tabla t_comidas
  const setDescriptionList = () => {
    Axios.get("http://localhost:9000/api/t_categorias_comida")
      .then((response) => {
        console.info(response);
        setDeslist(response.data);
        setDeslisttabla(response.data);
      })
      .catch((error) => console.warn(error));
  };

  const submitComidas = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:9000/api/t_comidas", {
      Nombre_comida: nombre_comida,
      Descrip_comida: descrip_comida,
      Precio: precio,
      CategoriaC_fk: categoriaC_fk,
    })
      .then((response) => {
        setDescriptionList();
      })
      .catch((error) => console.warn);

  };

  //variable que devuelven los datos de t_comidas
  const [categoria, setCategoria] = useState([]);
  const [categ, setCateg] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:9000/api/t_comidas").then((Response) => {
      setCategoria(Response.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        {/*----------PARA INSERT EN LA TABLA T_COMIDAS-------------------*/}
        <form className="form-group">
          <h3>Inserte los platillos o comidas disponibles</h3>
          <input
            id="foodname"
            className="contenido btn-block mb-3"
            placeholder="platillo o menú"
            type="text"
            onChange={(e) => {
              setNomcomida(e.target.value);
            }}
          />

          <input
            id="foodDescription"
            className="contenido btn-block mb-3"
            placeholder="Descripción de la comida"
            type="text"
            onChange={(e) => {
              setDescom(e.target.value);
            }}
          />

          <input
            className="btn btn-danger btn-block"
            value="Agregar platillo"
            type="submit"
            onClick={submitComidas}
          />
        </form>

        <input className="form-control" type="file" />

        <input
          id="foodCost"
          className="contenido btn-block mb-3"
          placeholder="Precio del platillo"
          type="text"
          onChange={(e) => {
            setPrecio(e.target.value);
          }}
        />

        <DropdownButton
          id="dropdown-item-button"
          title="Seleccione categoría del platillo"
        >
          <Dropdown.ItemText>Categorías disponibles</Dropdown.ItemText>
          {/*en este botón debe aparecer el listado de las 
              categorías de la tabla T_CategoriasComida*/}

          {descripciontabla.map((elemento, index) => {
            return (
              <Dropdown.Item
                as="button"
                onClick={() => {
                  setCat(elemento.idT_Categoria_comida);

                  setcategoriaC_fk(elemento.idT_Categoria_comida);
                }}
                key={index}
              >
                {elemento.idT_Categoria_comida}.{elemento.Descricion}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>

        <label className="mg-top 3">{cat}</label>
        {console.log(categoriaC_fk)}
      </div>
      {/*-----TABLA responsive en la cual se listarán los registros de la tabla T_CategoriasComida-----*/}

      <div className="container mt-3">
        <label>Listado platillos</label>
        <table className="table table-bordered">
<thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Imagen</th>
      <th scope="col">Precio</th>
      <th scope="col">Categoria</th>
      <th scope="col">Editar.</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  {categoria.map(item => {
  return(
  <tbody key={item.idT_Comida }>

            <tr>
            <th>{item.idT_Comida }</th>
            <td >{item.Nombre_comida}</td>
            <td >{item.Descrip_comida}</td>
            <td ></td>
            <td >{item.Precio}</td>
            <td >{item.CategoriaC_fk}</td>
            <td >Editar</td>
            <td >Eliminar</td>
  </tr>
 
</tbody>
 )
})}
</table>
      </div>
    </div>
  );
};

export default CompComida;
