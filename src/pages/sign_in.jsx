import React, {useState} from 'react'
import {auth} from '../firebaseconfig'
import '../css/login.css'

 const Sign_in = () => {

//variables que capturarán los valores ingresados en los input

const[email, setEmail]= useState('')
const [pass, setpass] = useState('')
const [msgerror, setMsgError]= useState('')


//función para evitar la recarga de la página
//**en esta función se puede agregar el codigo para autentificar en firebase
const RegistrarUsuario = (e)=>{
    e.preventDefault()
            //intencion de registrar al usuario
            auth.createUserWithEmailAndPassword(email,pass)
            //si el usuario se puede registrar salta la alerta
            .then(r=> alert('Usuario registrado'))      
            .catch(e => {
        //condicional para mostrar mensaje de error por correo
        if (e.code === 'auth/invalid-email'){
            alert('Formato de email incorrecto')
        }
        if (e.code === 'auth/email-already-in-use'){
            alert('El correo ya esta en uso')
        }
        //condicional para mostrar mesaje de erro por la contraseña
       
        if(e.code === 'auth/weak-password'){
            alert('la contraseña debe de tener como minimo 6 caracteres')
                        }
                    })
}
 
  const LoginUsuario = ()=>{
      auth.signInWithEmailAndPassword(email,pass)
    .then((r) => console.log(r))
    .catch((err)=> {
        if (err.code === 'auth/wrong-password'){
            alert('contraseña incorrecta')
        }
        if (err.code=== 'uth/user-not-found'){
            alert('usuario no encontrado')
        }
        if (err.code=== 'auth/invalid-email'){
            alert('email no valido')
        }
               
    })
  }
    
    return (
        <div className="container">

        
        <div className="login-form mt-5">
        
        
        <h2>INICIO DE SESIÓN</h2>

            {/* se está llamando la función RegistrarUsuario */}

            <form onSubmit={RegistrarUsuario} className="form-group">

                {/* botones para ingreso de nombre de user y contraseña */}
                <input 
                onChange={(e)=> {setEmail(e.target.value)}}
                className="botonsesion btn-block mb-3"  
                placeholder="Email" 
                type='email'/>
                
                
                {/* tomará el valor de la variable setpass */}
                <input 
               
                onChange={(e)=> {setpass(e.target.value)}}
                type="password" 
                className="botonsesion btn-block mb-3" 
                placeholder="Contraseña" />

                

                <input
                className='btn btn-danger btn-block'
                value='Registrar usuario'
                type = "submit"/>
                
               
            </form>
           {/* botón iniciar sesión */}
           <button 
           onClick ={LoginUsuario}
               
                className="btn btn-danger btn-block">Iniciar sesión</button>
        {
            msgerror != null ?
            (
                <div>
                    {msgerror}
                </div>
            )
            :
            (
                <span></span>

            )
        }
    </div> 
    </div>  
        
    )
}
export default Sign_in