// import Mainpage from "./Components/Mainpage";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/pages/Home';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Containerr from './Components/Container'
import { Accordion ,Badge,  Navbar,Container} from "react-bootstrap";
import Register from './Components/Registrtion';
import CartButton from './Components/Cart/CartButton';
import About from './Components/pages/About';
import StoreContext from './Store/StoreContext';
const router = createBrowserRouter([{
  path:'/home',element:<Home/>
},
{
  path:'/about',element:<About/>
},
{path:'/',element:      <StoreContext>      
<Register>
</Register>
<Containerr></Containerr>

</StoreContext>}])
function App() {
  return (
    <>
      {/* <StoreContext>      
        <Register>
        </Register>
        <Containerr></Containerr>
        
      </StoreContext> */}
      <RouterProvider router={router}/>

    
    </>
  )
}

export default App;
