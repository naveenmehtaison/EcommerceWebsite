import { useState } from "react"
import { Button, Card, Col, Container, Row,Navbar } from "react-bootstrap"
import { Form } from "react-bootstrap"


const Register=()=>{
    let [state ,setstate]=useState({
        user:{
            username:'',
            email:'',
            password:''
    
        }
    })
    let updateInput=(e)=>{
        setstate({
            ...state,
            user:{
                ...state.user,
                [e.target.name]:e.target.value
            }
        })
    }
    const SubmitFunc=(e)=>{
        e.preventDefault()
        setstate({...state},e.target.value)

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
                   <Button>Cart</Button>
                </Navbar.Brand>
                </Container> 
            </Navbar>
            <Card backgroud-color='grey' class='mt-1' style={{ height: '10rem' ,background:'grey'}}>
                <Card.Title  >
                    <h1  class='mt-2 display-1' align='center'>The  Genrics</h1>
                </Card.Title>
            </Card>
        </>

    )
}
export default Register