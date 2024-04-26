import { Container, Row ,Col, Card, Button,display} from "react-bootstrap"
import { useState,useContext } from "react"
import DataContext from "../Store/auth-context"
import React from "react"
import axios from "axios";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Containerr=(props)=>{
    const Ctx = useContext(DataContext)
    console.log(Ctx.arr)
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
        const j = await axios.post('https://crudcrud.com/api/a26364ec3170447a90a00c68ae8ad247/ecom',ele)
        Ctx.additem(j.data,item)
        console.log(j.data)
    }
    return(
            <>
                <Row className="justify-content-md-center" xs={3}>
                    <Col > 
                        <div>
                        {productsArr.slice(0,productsArr.length/2).map((ele, item) => (
                            <React.Fragment key={item}>
                                <li><Link to={`/store/${item}`}>{ele.title}</Link ></li>
                                <img src={ele.imageUrl} alt={ele.title}></img>
                                <p>$ {ele.price}</p>
                                <Button onClick={()=>{AddtoCart(ele,item)}}>Add To Cart</Button>
                                
                            </React.Fragment>
                        ))}
                        <hr></hr>
                        </div>
                    </Col>
                    
                    <Col >
                        {productsArr.slice(productsArr.length/2,productsArr.length).map((ele, item) => (
                            <React.Fragment key={item}>
                                <li><Link to={`/store/${item}`}>{ele.title}</Link ></li>
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