import {Routes,Route} from 'react-router-dom' 
import About from '../Components/pages/About'
import Home from '../Components/pages/Home'
import Contact from '../Components/pages/Contact'
import Containerr from '../Components/Container'
import ProductDetails from '../Components/ProductDetails'
import Login from '../Components/pages/Login'

const MyRoutes=()=>{
    return(

        <Routes>
            
            <Route path='/' element ={<Containerr/>}/>
            <Route path='/store' element ={<Containerr/>}/>
            <Route path="/store/:productid" element={<ProductDetails />} />

            <Route path='/home' element ={<Home/>}/>
            <Route path='/contact' element ={<Contact/>}/>
            <Route path='/about' element ={<About/>}/>
            <Route path='*' element ={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}
export default MyRoutes