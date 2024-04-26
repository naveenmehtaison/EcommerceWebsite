import { useState ,useContext} from "react"
import { Button, Card, Col, Container, Row,Navbar } from "react-bootstrap"
import { Form } from "react-bootstrap"
import Cart from "./Cart/Cart"
import {  NavLink } from "react-router-dom"
import axios from "axios"
import DataContext from "../Store/auth-context"
const Register=()=>{
    const [err,seterr]=useState(null)
    const [showcart,setshowcart]=useState(false)
    const Ctx = useContext(DataContext)
    async function cartHandler(e) {
        setshowcart(!showcart);
        
        e.preventDefault();
        console.log(Ctx.arr)
        try {
            const response = await axios.get('https://crudcrud.com/api/a26364ec3170447a90a00c68ae8ad24/ecom');
            const responseData = response.data; // Accessing the data property of the response
            
            Ctx.setarr(responseData);
            console.log('inside cart handler', showcart);
            seterr(false)
        } catch (error) {
            console.error('Error fetching cart items:', error);
            seterr(true)
            // setTimeout((cartHandler(e)),500000)
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
                <Navbar.Brand style={{color:'white'}}>
                    <NavLink to="/contactus" style={{color:'white'}}>Contact US</NavLink>
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
            {/* {!err && showcart && <Cart></Cart> } */}
            {showcart && <Cart props={err}></Cart> }
        </>

    )
}
export default Register