import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import FormularioCitas from './components/FormularioCitas';
import './style.css';
function App() {
  return (
    <Container className='text-center pt-5'>
     <h1 className='display-4'>Administrador pacientes veterinaria</h1>
     <hr/>
     <FormularioCitas></FormularioCitas>
    </Container>
  );
}

export default App;
