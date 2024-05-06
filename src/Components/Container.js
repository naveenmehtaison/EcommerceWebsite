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
        id:'1',
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity:0
        
        },
        
        {
            id:'2',
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity:0
        
        },
        
        {
            id:'3',
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity:0
        
        },
        
        {
            id:'4',
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity:0
        
        }
        
        ]
    async function Post(ele,props){
        const j = await axios.put(`https://crudcrud.com/api/9c90c02f02874035aca202f560e4884d/${Ctx.curemail}/${ele._id}`,props)

    }
    async function AddtoCart(props, item){
        console.log(Ctx.curemail)
        // const j = await axios.post(`https://crudcrud.com/api/0eb261a202de4b0a8ec208c5e9e96945/${Ctx.curemail}`,props)
        const get = await axios.get(`https://crudcrud.com/api/9c90c02f02874035aca202f560e4884d/${Ctx.curemail}`)
        let found= false
        const new_map = get.data.forEach((ele,item)=>{
            
            if(props.imageUrl===ele.imageUrl){
                try{found=true
                // const newarr= [...Ctx.arr]
                // newarr[item].quantity++
                props.quantity++
                console.log(props,'purana maal h')
                console.log(ele,Ctx.curemail)
                Post(ele,props)
                // Ctx.setarr(props)
                console.log(Ctx.arr)
                }            
                catch{
                    console.log('err')
                }
            }

        })
        if(found===false){
            console.log(Ctx)
            console.log('foundfalse')
            const j = await axios.post(`https://crudcrud.com/api/9c90c02f02874035aca202f560e4884d/${Ctx.curemail}`,props)
            // setarr(props)
            console.log(j.data)
            

        }

    }
    return(
            <>
                {/* <Row className="justify-content-md-center" xs={3}>
                    <Col >  */}
                        <div className="container">
                        {productsArr.slice(0,productsArr.length).map((ele, item) => (
                            <div className="albumcard" key={item}>
                                <li><Link to={`/store/${ele.id}`}>{ele.title}</Link ></li>
                                <img src={ele.imageUrl} alt={ele.title}></img>
                                <p>$ {ele.price}</p>
                                <Button onClick={()=>{AddtoCart(ele,item)}}>Add To Cart</Button>
                                
                            </div>
                        ))}
                        <hr></hr>
                        </div>
                    {/* </Col>
                    
                    <Col > */}
                        {/* {productsArr.slice(productsArr.length/2,productsArr.length).map((ele, item) => (
                            <React.Fragment key={item}>
                                <li><Link to={`/store/${ele.id}`}>{ele.title}</Link ></li>
                                <img src={ele.imageUrl} alt={ele.title}></img>
                                <p>$ {ele.price}</p>
                                <Button  onClick={()=>{AddtoCart(ele,item)}}>Add To Cart</Button>
                                <hr></hr>
                            </React.Fragment>
                            
                        ))} 
                        <hr></hr> */}
                    {/* </Col>
                </Row> */}
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