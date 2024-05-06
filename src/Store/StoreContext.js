import DataContext from "./auth-context";
import React, { useState, useContext} from "react";
import axios from "axios";
const StoreContext=(props)=>{
    const [login,setlogin] = useState(false)
    const [email ,setemail] = useState('')

    const loginfunc=()=>{
        setlogin(true)
    }
    
    const emailfunc=(props)=>{
        setemail(props)
    }
    const StoreContext2 = {
        login:loginfunc,
        islog:login,
        email:emailfunc,
        curemail:email
    }
    return(
        <DataContext.Provider value={StoreContext2}>
            {props.children}
        </DataContext.Provider>
    )


}
export default StoreContext