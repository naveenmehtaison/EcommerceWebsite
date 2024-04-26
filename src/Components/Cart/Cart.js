import { Button , Row,Col,Card} from "react-bootstrap";
import CartButton from "./CartButton";
import classes from './Cart.module.css'
import { useState,useContext } from "react";
import DataContext from "../../Store/auth-context";
import axios from "axios";
function Cart(props){
    const [err,seterr]=useState(null)
    const [loading,setisloading] = useState(false)
    console.log(props.props)
    // if(props.props==false){
    //     console.log('true hai')
    //     seterr(true)
    // }



    console.log('inside cart,js')
    const Ctx= useContext(DataContext)
    const [arr,setarr]=useState(Ctx.arr)
   
    async function HandleDel  (ele, items) {
        
        setisloading(true)
        try{
            console.log(ele)

            const response = await axios.delete(`https://crudcrud.com/api/a26364ec3170447a90a00c68ae8ad247/ecom/${ele._id}`)
            const responseData= response.data
        
            Ctx.removeitem(ele,items)
            setarr(responseData)
        }
        catch(err){
            console.log(err.message)
            setarr(err.message)
        }
        // console.log(Ctx.arr.length)
        setisloading(false)
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
                {!props.props && !loading && Ctx.arr.length==0&&
                
                    <p>Cart is Empty</p>
                }
                {err && <p>{err.message}</p>}
                {!props.props && !loading  && !err && Ctx.arr.map((ele,items)=>{
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
                {props.props && <p>loading..</p> && <p>'Something went wrong ....Retrying <Button onClick={()=>{props.props=true}}>Retrying</Button></p>}
                


            </div>
        </>
    )
}
export default Cart