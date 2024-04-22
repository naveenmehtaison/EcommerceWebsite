import { Container, Row ,Col, Card, Button,display} from "react-bootstrap"
import { useState,useContext } from "react"
import DataContext from "../Store/auth-context"
import React from "react"

const Containerr=(props)=>{
    const Ctx = useContext(DataContext)
    console.log(Ctx)
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity:0
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity:0
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity:0
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity:0
        
        }
        
        ]
    async function AddtoCart(ele,item){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ele)
        };
        const j = fetch('https://crudcrud.com/api/bfd3cbd42bcf4c948bebd4fbec5d4f84/ecom', requestOptions)
            .then(response => response.json())
            .then(data => Ctx.additem(data,item));
            
        // console.log(ele[item])
        // ele.quantity=0
        // Ctx.additem(ele,item)
        // console.log(ele)

    }
    return(
            <>
                <Row className="justify-content-md-center" xs={3}>
                    <Col > 
                        {productsArr.slice(0,productsArr.length/2).map((ele, item) => (
                            <React.Fragment key={item}>
                                <p>{ele.title}</p>
                                <img src={ele.imageUrl} alt={ele.title}></img>
                                <p>$ {ele.price}</p>
                                <Button onClick={()=>{AddtoCart(ele,item)}}>Add To Cart</Button>
                                
                            </React.Fragment>
                        ))}
                        <hr></hr>
                    </Col>
                    
                    <Col >
                        {productsArr.slice(productsArr.length/2,productsArr.length).map((ele, item) => (
                            <React.Fragment key={item}>
                                <p>{ele.title}</p>
                                <img src={ele.imageUrl} alt={ele.title}></img>
                                <p>$ {ele.price}</p>
                                <Button  onClick={()=>{AddtoCart(ele,item)}}>Add To Cart</Button>
                                <hr></hr>
                            </React.Fragment>
                            
                        ))} 
                        <hr></hr>
                    </Col>
                </Row>
                {/* <Button onClick={props.onCart}></Button> */}
                <Card  style={{ height: '8rem',background:'#ADD8E6' }}>
                    <Card.Footer class='display-1'>
                        <p align='center'>The generics</p>

                    </Card.Footer>
                </Card>
            </>



    )
}
export default Containerr