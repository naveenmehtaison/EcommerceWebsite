import { useState ,useContext} from "react"
import { Button, Card, Col, Container, Row,Navbar } from "react-bootstrap"
import { Form } from "react-bootstrap"
import Cart from "./Cart/Cart"
import {  NavLink } from "react-router-dom"
import axios from "axios"
import DataContext from "../Store/auth-context"
const Register=()=>{
    const [showcart,setshowcart]=useState(false)
    const Ctx = useContext(DataContext)
    async function cartHandler(e) {
        e.preventDefault();
        console.log(Ctx.arr)
        try {
            const response = await axios.get('https://crudcrud.com/api/79eac66889cd4d5cbf3778784dc5f585/ecom');
            const responseData = response.data; // Accessing the data property of the response
            setshowcart(!showcart);
            Ctx.setarr(responseData);
            console.log('inside cart handler', showcart);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    }
    
    return(
        <>
            <Navbar bg='black' expand='sm' variant='light'>
                <Container>
                <Navbar.Brand style={{color:'white'}}>
                        <NavLink to="/home">Home</NavLink>
                   
                </Navbar.Brand>
                <Navbar.Brand style={{color:'white'}} href='/'>
                   Store
                </Navbar.Brand>
                <Navbar.Brand style={{color:'white'}}>
                    <NavLink to="/about" style={{color:'white'}}>About</NavLink>
                </Navbar.Brand>

                <Navbar.Brand style={{color:'white'}} href='/'>
                   <Button  onClick={cartHandler}>Cart</Button>
                </Navbar.Brand>
                </Container> 
            </Navbar>
            <Card backgroud-color='grey' class='mt-1' style={{ height: '10rem' ,background:'grey'}}>
                <Card.Title  >
                    <h1  class='mt-2 display-1' align='center'>The  Genrics</h1>
                </Card.Title>

            </Card>
            {showcart && <Cart></Cart> }
        </>

    )
}
export default Register