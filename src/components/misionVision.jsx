import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import  '../css/carrousel_Mision.css'

import a1 from '../assets/img/lugar/a1.jpg'
import a2 from '../assets/img/lugar/a2.jpg'
import a5 from '../assets/img/lugar/a5.jpg'
import a3 from '../assets/img/lugar/a3.jpg'


/*-------MUESTRA LA VISIÓN, MISIÓN Y PROPOSITO DEL RESTAURANTE, CON IMÁGENES DE ÉSTE-------*/

const MisionVision = () => {
    return (
        <div className="vision text-dark">

        <div className="container  mt-2 ">
            <p className="vision">
            Pedacitos de Antojo un Restaurante temático familiar, nuestro objetivo es hacer que te la pases bien junto a tu familia y tus pequeños, podrás disfrutar, comer, jugar y aprender junto nosotros. Nuestra comida es fresca, artesanal y saludable
            </p>


<CardGroup>

<Card className="m-2" >
    <Card.Img variant="top" src={a1} />
</Card>

<Card className="m-2" >
    <Card.Img variant="top" src={a2} />
</Card>

<Card className="m-2">
    <Card.Img variant="top" src={a3} />
</Card>

<Card className="m-2">
    <Card.Img variant="top" src={a5} />
    
</Card>

</CardGroup>

</div>

        
        </div>
    )
}

export default MisionVision
