import React from 'react'
import desay from '../assets/img/desayuno1.jpg'
import hotcakes from '../assets/img/hotcakes.jpg'
import granola from '../assets/img/granola.jpg'
import caldo from '../assets/img/caldo.jpg'
import quesoder from '../assets/img/nachoquesoderretido.jpg'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const GrupImags = () => {
    return (

    <div className="p-3 mb-2 bg-warning text-dark">
       
    <CardGroup>

        <Card className="m-2" >
            <Card.Img variant="top" src={desay} />
        </Card>

        <Card className="m-2">
            <Card.Img variant="top" src={hotcakes} />
        </Card>
        
        <Card className="m-2">
            <Card.Img variant="top" src={granola} />
        </Card>

        <Card className="m-2">
            <Card.Img variant="top" src={caldo} />
        </Card>

        <Card className="m-2">
            <Card.Img variant="top" src={quesoder} />
        </Card>
        
</CardGroup>

    </div>
    )
}

export default GrupImags
