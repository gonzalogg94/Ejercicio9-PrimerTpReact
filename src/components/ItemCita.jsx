import { Card, Button, ListGroup, Badge } from "react-bootstrap";
import "../style.css";
const ItemCita = ({
  mascota,
  duenio,
  fecha,
  hora,
  sintomas,
  borrarCita,
  cita,
}) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 my-4">
      <Card className="bgCard">
        <Card.Body>
          <Card.Title>Mascota: {mascota}</Card.Title>
          <Card.Subtitle>Dueño: {duenio}</Card.Subtitle>
          <hr />
          <ListGroup>
            <ListGroup.Item>
              Fecha:{" "}
              <Badge bg="warning" >
                {fecha}
              </Badge>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              Hora:{" "}
              <Badge bg="warning">
                {hora}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item>Sintomas: {sintomas}</ListGroup.Item>
          </ListGroup>
          <hr />
          <div >
            <Button variant="danger" onClick={() => borrarCita(cita)}>
              Borrar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCita;
