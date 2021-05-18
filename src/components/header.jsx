import React, {useEffect, useState} from 'react'
import '../css/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import {auth} from '../firebaseconfig'
import {LinkContainer} from 'react-router-bootstrap'
import { Person  } from 'react-bootstrap-icons';
import logoantojitos from '../assets/img/antojitos.png'


/*COMPONENTE NAVBAR QUE SE MUESTRA EN LA PARTE SUPERIOR DE LA PÁGINA */

const Header = props  => {
    const { location } = props;
    
    const [usuario, setUsuario] = useState(null)
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if (user){
                setUsuario(user.email)
                console.log(user.email)
            }
        })
    }, [])

    const CerrarSesion = () =>{
        auth.signOut()
        setUsuario(null)
    }
    
    
    return (

    <Navbar collapseOnSelect 
        className="navbar-expand-custom "    
        expand="lg" 
        bg="danger" 
        variant="dark" 
        sticky="top" 
        >

    <div className="container">
        
    

        <LinkContainer to="/"> 
            <Navbar.Brand href="#home" >
                    <img className="logo" 
                    src={logoantojitos}
                    alt= "logo e inicio de pedacito de antojo" >
                    </img>
            </Navbar.Brand>
        </LinkContainer>

                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav' >
                    
                <Nav className="mr-auto" activeKey={location.pathname}>           
                        <LinkContainer to="/about">
                            <Nav.Link>Conoce sobre nosotros</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/menu">
                            <Nav.Link>Menú</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/admin">
                            <Nav.Link>Administración</Nav.Link>
                        </LinkContainer>

            

                <LinkContainer to="/sign_in">
                    <Nav.Link> 
                        <Person/>Inicio de sesión</Nav.Link>
                </LinkContainer>   


            {
                //modifiqué un poco el código espero no haber interferido en este botón 27-04
                    usuario ? 
                    (
                        <button 
                        onClick={CerrarSesion}
                        className= 'btn btn-danger'
                        >cerrar sesion</button>
                    )
                    :
                    (
                        <span></span>
                    )
                }

            </Nav>

                </Navbar.Collapse> 
               
                </div>
                
        </Navbar>
    

   
    )
}
export default Header