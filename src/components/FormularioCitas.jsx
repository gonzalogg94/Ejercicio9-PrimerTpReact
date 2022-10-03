import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import ListaCitas from "./ListaCitas";
const FormularioCitas = () => {
  const citasLocalStorage =
    JSON.parse(localStorage.getItem("arregloCitasKey")) || [];

  const [mascota, setMascota] = useState("");
  const [duenio, setDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [arregloCitas, setArregloCitas] = useState(citasLocalStorage);

  useEffect(() => {
    localStorage.setItem("arregloCitasKey", JSON.stringify(arregloCitas));
  }, [arregloCitas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      mascota.trim() === "" ||
      duenio.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      alert("Completar todos los datos");
      return;
    } else {
      let objetoCita = { mascota, duenio, fecha, hora, sintomas };
      setArregloCitas([...arregloCitas, objetoCita]);
      setMascota("");
      setDuenio("");
      setFecha("");
      setHora("");
      setSintomas("");
    }
  };

  const borrarCita = (cita) => {
    let arregloModif = arregloCitas.filter((item) => item !== cita);
    setArregloCitas(arregloModif);
  };
  return (
    <article>
      <Form onSubmit={handleSubmit}>
        <h2>Llenar el formulario para crear una cita</h2>
        <Form.Group className="mb-3 d-flex pt-3" controlId="formBasicEmail">
          <Form.Label>Nombre de la mascota</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese el nombre de la mascota"
            onChange={(e) => setMascota(e.target.value)}
            value={mascota}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
          <Form.Label>Nombre del dueño</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre del dueño"
            onChange={(e) => setDuenio(e.target.value)}
            value={duenio}
            required
          />
        </Form.Group>
        <div className="row">
          <aside className="col-12 col-md-6">
            <Form.Group className="mb-3  d-flex" controlId="formBasicPassword">
              <Form.Label className="pe-3">Fecha</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                onChange={(e) => setFecha(e.target.value)}
                value={fecha}
                required
              />
            </Form.Group>
          </aside>
          <aside className="col-12 col-md-6">
            <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
              <Form.Label className="pe-3">Hora</Form.Label>
              <Form.Control
                type="time"
                placeholder="Password"
                onChange={(e) => setHora(e.target.value)}
                value={hora}
                required
              />
            </Form.Group>
          </aside>
        </div>
        <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
          <Form.Label className="pe-3">Sintomas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese los sintomas"
            onChange={(e) => setSintomas(e.target.value)}
            value={sintomas}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar una cita
        </Button>
      </Form>
      <ListaCitas
        arregloCitas={arregloCitas}
        borrarCita={borrarCita}
      ></ListaCitas>
    </article>
  );
};

export default FormularioCitas;
