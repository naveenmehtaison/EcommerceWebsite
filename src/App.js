// import Mainpage from "./Components/Mainpage";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Containerr from './Components/Container'
import { Accordion ,Badge,  Navbar,Container} from "react-bootstrap";
import Register from './Components/Registrtion';
import CartButton from './Components/Cart/CartButton';
import StoreContext from './Store/StoreContext';
function App() {
  return (
    <StoreContext>
      {/* <Navbar bg='success' expand='sm' variant='light'>
         {/* <Container>
          <Navbar.Brand href='/'>
            React Bootstrap
          </Navbar.Brand>
          </Container>  */}
       
      <Register>
      </Register>
      <Containerr></Containerr>
    </StoreContext>
  );
}

export default App;
