import { useState } from "react"
import { Button, Card, Col, Container, Row,Navbar } from "react-bootstrap"
import { Form } from "react-bootstrap"
import Cart from "./Cart/Cart"
const Register=()=>{
    const [showcart,setshowcart]=useState(false)
    const cartHandler=(e)=>{
        e.preventDefault()
        setshowcart(!showcart)
        console.log('inside cart handler',showcart)
    }
    return(
        <>
            <Navbar bg='black' expand='sm' variant='light'>
                <Container>
                <Navbar.Brand style={{color:'white'}} href='/'>
                   Home
                </Navbar.Brand>
                <Navbar.Brand style={{color:'white'}} href='/'>
                   Store
                </Navbar.Brand>
                <Navbar.Brand style={{color:'white'}} href='/'>
                   About
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