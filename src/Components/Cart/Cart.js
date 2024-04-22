import { Button , Row,Col,Card} from "react-bootstrap";
import CartButton from "./CartButton";
import classes from './Cart.module.css'
import { useState,useContext } from "react";
import DataContext from "../../Store/auth-context";
import axios from "axios";
const Cart=()=>{
    console.log('inside cart,js')
    const Ctx= useContext(DataContext)
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
    const [arr,setarr]=useState(Ctx.arr)
    async function HandleDel  (ele, items) {
        try{

            const response = axios.delete(`https://crudcrud.com/api/bfd3cbd42bcf4c948bebd4fbec5d4f84/ecom/${ele._id}`)
        
        Ctx.removeitem(ele,items)
        setarr(response)
        }
        catch(err){
            console.log(err)
        }
        // console.log(Ctx.arr.length)
    }
    
    return(
        <>
            <div className={classes.modal}>
                <h1 align='center'>CART</h1>
                <Row>
                    <Col>
                        <b>Image</b>
                        <hr></hr>
                    </Col>
                    <Col>
                    <b style={{left: "30%",position:'relative'}}>Price</b><hr></hr></Col>
                    <Col>
                    <b>Quantiy</b><hr></hr>
                    
                    </Col>
                </Row>
                {arr.map((ele,items)=>{
                    return(
                    <Row>
                        <Col>
                            <img  src={ele.imageUrl} style={{height:'90px',width:'100px'}}></img>
                        </Col>
                        <Col>
                        {ele.price}</Col>
                        <Col>
                        {ele.quantity}
                        <Button style={{background:'red'}} onClick={()=>{HandleDel(ele,items)}}>Remove</Button>
                        </Col>
                    </Row>)
                })}

            </div>
        </>
    )
}
export default Cart