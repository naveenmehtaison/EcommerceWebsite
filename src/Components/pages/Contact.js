import { Form } from "react-router-dom"
import Register from "../Registrtion"
import { Row, Col,Card, Button } from "react-bootstrap"
import { useState,useEffect } from "react"
import axios from "axios"
const Contact=()=>{
    // const [modal,setmodal]=useState(false)
    const Modal = ()=>{
        return(
            <>
                <p>thnks for showing interest !!we will contact u soon </p>
                {/* <button onClick={setmodal(!false)}></button> */}
            </>
        )
    }
    // useEffect(Modal,[handleSubmit])
    async function handleSubmit(e){
         e.preventDefault()
        
         const obj = {
            name:e.target.name.value,
            phone:e.target.phone.value,
            email:e.target.email.value
         }
         console.log(obj)
        const response = await axios.post('https://crudcrud.com/api/97c8bfedc67a43379a751534516880fd/contact',obj)
        // setmodal(true)

    }
    return(
        <>
            {/* {modal && <Modal></Modal>} */}
            <Register/>
            <Row className="justify-content-md-center" xs={2}>
                <Col>
                    {/* <img src='https://media.istockphoto.com/id/144220369/photo/rock-band-silhouette.webp?b=1&s=170667a&w=0&k=20&c=hYuEq_uhtHQHtVlreevpjqx9TYJ1toPMd7u7E_THGcI='></img> */}
                    <Col>
                       <form onSubmit={handleSubmit}>
                         <label>Username</label>
                         <input id='name' class="form-control" type='text'></input>
                         <label>Phone Number</label>
                         <input id='phone' class="form-control" type='number'></input>
                         <label>Email</label>
                         <input id='email' class="form-control" type='email'></input>    
                         <Button type='submit'>Submit</Button>                    
                       </form>
                    </Col>
                </Col>
            </Row>
            <Card className="mt-5" style={{ height: '18rem',background:'#ADD8E6' }}>
                    <Card.Footer class='display-1'>
                        <p align='center'>The generics</p>

                    </Card.Footer>
            </Card>
        </>       
    )
}
export default Contact