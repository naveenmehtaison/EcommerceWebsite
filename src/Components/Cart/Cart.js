import { Button , Row,Col,Card} from "react-bootstrap";
import CartButton from "./CartButton";
import classes from './Cart.module.css'
import { useState,useContext } from "react";
import DataContext from "../../Store/auth-context";
import axios from "axios";
import { useEffect } from "react";
function Cart(props){
    const [loading,setisloading] = useState(false)
    const [cart,setcart]= useState([])
    const Ctx= useContext(DataContext)
    useEffect(()=>{
        async function datastore(){
            setisloading(true)
            const response = await axios.get(`https://crudcrud.com/api/9c90c02f02874035aca202f560e4884d/${Ctx.curemail}`);
            // Ctx.setarr(response)
            setisloading(false)
            setcart(response.data)
        
            
        }
        datastore()
        
    },[])
    console.log(Ctx.curemail)
    console.log(Ctx.arr)
    const d = [Ctx.arr]
    
    
    const [err,seterr]=useState(null)

    console.log(props.props)
   
    async function HandleDel  (ele, items) {
        
        
        setisloading(true)
        try{
            console.log(ele)

            const response = await axios.delete(`https://crudcrud.com/api/9c90c02f02874035aca202f560e4884d/${Ctx.curemail}/${ele._id}`)
            const response2 = await axios.get(`https://crudcrud.com/api/9c90c02f02874035aca202f560e4884d/${Ctx.curemail}`);
            setcart(response2.data)
            
        }
        catch(err){
            console.log(err.message)
        }
        setisloading(false)

    }
    
    return(
        <div className={classes.backdrop}>

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
                { !loading && cart.length==0&&
                
                    <p>Cart is Empty</p>
                }
                {loading && <p>Loading...</p>}
                {/* {err && <p>{err.message}</p>} */}
                {!props.props && !loading  && !err && cart.map((ele,items)=>{
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
                {/* {props.props && <p>loading..</p> && <p>'Something went wrong ....Retrying <Button onClick={()=>{props.props=true}}>Retrying</Button></p>} */}
                


            </div>
        </div>
    )
}
export default Cart