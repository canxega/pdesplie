import ListGroup from 'react-bootstrap/ListGroup'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Admin = () => {
    return (
        <div className="container mt-3">

            <h2>Administración y Gestión de Restaurante</h2>
            <ListGroup>
  
            <ListGroup.Item action variant="danger">
                <LinkContainer to="/formComidayCategorias" >
                    <Nav.Link>
                        Comidas y sus Categorias (tipos)
                    </Nav.Link>
                </LinkContainer>  
            </ListGroup.Item>

            <ListGroup.Item action variant="success">
                <LinkContainer to="/extras" >
                    <Nav.Link>
                        Acompañamientos extras disponibles
                    </Nav.Link>
                </LinkContainer>
            </ListGroup.Item>

            <ListGroup.Item action variant="warning">
                <LinkContainer to="/bebidas" >
                    <Nav.Link>
                       Bebidas disponibles
                    </Nav.Link>
                </LinkContainer>
            </ListGroup.Item>

            <ListGroup.Item action variant="danger">
                <LinkContainer to="/registro/cocina" >
                    <Nav.Link>
                        Registrar Empleado de Cocina
                    </Nav.Link>
                </LinkContainer>  
            </ListGroup.Item>

            <ListGroup.Item action variant="success">
                <LinkContainer to="/registro/mesero" >
                    <Nav.Link>
                        Registrar Mesero
                    </Nav.Link>
                </LinkContainer>
            </ListGroup.Item>

            <ListGroup.Item action variant="warning">
                <LinkContainer to="/mesas" >
                    <Nav.Link>
                       Registra, Actualizar Mesa
                    </Nav.Link>
                </LinkContainer>
            </ListGroup.Item>
                       
            </ListGroup>
        </div>
    )
}

export default Admin
