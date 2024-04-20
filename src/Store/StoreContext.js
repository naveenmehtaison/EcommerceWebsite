import DataContext from "./auth-context";
import React, { useState, useContext} from "react";
const StoreContext=(props)=>{
    const [arr,setarr]= useState([        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity:0
        
        }])
    // const Ctx = DataContext.createContext()
    const additemFunc = (props, item) => {
        let found= false
        const new_map = arr.map((ele,item)=>{
            
            if(props.imageUrl===ele.imageUrl){
                found=true
                const newarr= [...arr]
                newarr[item].quantity++
                setarr(newarr)
            }
        })
        if(found===false){
            setarr([...arr,props])

        }

    }
    
    const j =[0,1,2,3]
    const removeItemFunc=(ele1,item1)=>{
        console.log(arr,'old')
        const newarr = arr.filter((ele,item)=>(
            ele1!==ele
        ))
        setarr(newarr)
        console.log(arr,item1)

    }
    const setarrfunc=(Arr)=>{
        setarr(Arr)
    }
    const StoreContext2 = {
        additem:additemFunc,
        removeitem:removeItemFunc,
        arr:arr,
        setarr:setarrfunc
    }
    return(
        <DataContext.Provider value={StoreContext2}>
            {props.children}
        </DataContext.Provider>
    )


}
export default StoreContext