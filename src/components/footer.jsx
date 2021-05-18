import React from 'react'
import '../css/footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {

    /*PIE DE PAGINA (MUESTRA UBICACIÓN Y REDES SOCIALES) */

    return (
<div className="bg-danger text-white " >
        <div className="abs-center">
            <ion-icon 
                name="location-outline" 
                size="large"
                className="icon">
            </ion-icon>
        </div>
            <p >San Bartolomé Becerra, No. 40, 3001- Antigua Guatemala.</p>
            <p>Nuestros horarios de atención son los días: miércoles a domingo de 8:00 a.m. a 9:00 p.m. También puedes ordenar llamando al 56151961. Los precios pueden cambiar sin previo aviso.</p>
        <div className="abs-center mt-3" >
            
                    

            <Link  className="link"
            to={{ pathname: "https://www.facebook.com/pedacitosdeantojo" }} 
            target="_blank">
             <ion-icon name="logo-facebook" size="large"></ion-icon>
            </Link>

            <Link className="link"
            to={{ pathname: "https://www.instagram.com/pedacitosdeantojo/?hl=es-la" }} 
            target="_blank">
             <ion-icon name="logo-instagram" size="large"></ion-icon>
            </Link>
        </div>

    </div>
    )
}

export default Footer
