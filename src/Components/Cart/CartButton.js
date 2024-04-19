import { Button } from "react-bootstrap"
import { useState } from "react"
import Cart from "./Cart"
const CartButton=()=>{
    const [showcart,setshowcart]=useState(false)
    const cartHandler=()=>{
        setshowcart(!showcart)
        console.log('inside cart handler',showcart)
    }
   return(
    <>
        <Button onClick={cartHandler}>
            showcart
        </Button>
        {showcart && <Cart></Cart> }
    </>


   ) 
}
export default CartButton