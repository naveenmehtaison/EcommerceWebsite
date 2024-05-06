import { useState ,useContext} from "react"
import { Button, Card, Col, Container, Row,Navbar } from "react-bootstrap"
import { Form } from "react-bootstrap"
import Cart from "./Cart/Cart"

import axios from "axios"
import {  NavLink } from 'react-router-dom';
import DataContext from "../Store/auth-context"
const Register=()=>{

    const [err,seterr]=useState(null)
    const [showcart,setshowcart]=useState(false)
    const Ctx = useContext(DataContext)
    if(localStorage.getItem('token')!=''){
        Ctx.login(true)
        const c = localStorage.getItem('email')
        Ctx.email(c)
        console.log(c)
    }
    function cartHandler(e) {
        e.preventDefault()
        setshowcart(!showcart);
    }
    
    return(
        <>
            <Navbar bg='black' expand='sm' variant='light'>
                <Container>
                {!Ctx.islog && <Navbar.Brand style={{color:'white'}}>
                    <NavLink to="/login" style={{color:'white'}}>Login</NavLink>
                </Navbar.Brand>}
                <Navbar.Brand style={{color:'white'}}>
                        <NavLink to="/home">Home</NavLink>
                   
                </Navbar.Brand>
                <Navbar.Brand style={{color:'white'}} >
                    <NavLink to="/store" style={{color:'white'}}>Store</NavLink>
                </Navbar.Brand>
                <Navbar.Brand style={{color:'white'}}>
                    <NavLink to="/about" style={{color:'white'}}>About</NavLink>
                </Navbar.Brand>
                <Navbar.Brand style={{color:'white'}}>
                    <NavLink to="/contact" style={{color:'white'}}>Contact US</NavLink>
                </Navbar.Brand>
                {Ctx.islog && <Navbar.Brand style={{color:'white'}} href='/'>
                   <Button  onClick={cartHandler}>Cart</Button>
                </Navbar.Brand>}
                {Ctx.islog && <Navbar.Brand style={{color:'white'}} href='/'>
                   <Button  onClick={()=>{localStorage.setItem('token','')
                    localStorage.setItem('email','')
                   }}>Logout</Button>
                </Navbar.Brand>}


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