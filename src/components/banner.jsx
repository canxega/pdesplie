import React from 'react'
import hamburbann from '../assets/img/hambur_bannerprim.jpg'
import alitas from '../assets/img/alitas.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

//prueba de cambio en git
const Banner = () => {
    return (
        <div>
           <img className="img-fluid"
                    src={hamburbann}
                    alt= "hamburguesa deliciosa" >
            </img>

            <img className="img-fluid mt-2"
                    src={alitas}
                    alt= "alitas" >
            </img>


        </div>
    )
}

export default Banner
