import { Button , Row,Col,Card} from "react-bootstrap";
import CartButton from "./CartButton";
import classes from './Cart.module.css'
import { useState,useContext } from "react";
import DataContext from "../../Store/auth-context";
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
    const HandleDel = (ele, items) => {
        // console.log('hello');
        // const arr2 = arr.filter((ele1,item) => ele.imageUrl!== ele1.imageUrl);
        // console.log(cartElements, ele, items);
        // setarr([...arr2]); // Assuming setArr is a state updater function
        // console.log(arr);
        Ctx.removeitem(ele,items)
        setarr(Ctx.arr)
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
                {Ctx.arr.map((ele,items)=>{
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