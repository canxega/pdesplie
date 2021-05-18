import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import comidatradicional from '../assets/img/comidatradicional.jpg'
import fondoabout from '../assets/img/fondoabout.jpg'
import _DSC9645 from '../assets/img/_DSC9645.jpg'
import _DSC9805 from '../assets/img/_DSC9805.jpg'
import  '../css/carrousel_Mision.css'


/*CAROUSEL DE LA PÁGINA -ABOUT-(MUESTRA TRANSICIÓN DE IMÁGENES)*/

const CarrouselAbout = () => {
    return (
        <div className="cont-center mt-2">
             
<Carousel fade>

<Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={fondoabout}
      alt="Hamburguesas"
    />
    <Carousel.Caption>
      <h3>Hamburguesas</h3>
      </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={_DSC9805}
      alt="aritos de cebolla"
    />
    <Carousel.Caption>
      <h3>Aros de cebolla</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  
  
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={_DSC9645}
      alt="Desayunos"
    />
    <Carousel.Caption>
      <h3>Desayunos</h3>
      
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={comidatradicional}
      alt="Comida tradicional"
    />
    <Carousel.Caption>
      <h3>Comida tradicional</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



             
        </div>
    )
}

export default CarrouselAbout
