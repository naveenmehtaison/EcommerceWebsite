import {Routes,Route} from 'react-router-dom' 
import { lazy,Suspense } from 'react'
import { useContext } from 'react'
import DataContext from '../Store/auth-context'

// import About from '../Components/pages/About'
const About=lazy(()=> import('../Components/pages/About'))
// import Home from '../Components/pages/Home'
const Home = lazy(()=>import('../Components/pages/Home'))
// import Contact from '../Components/pages/Contact'
const Contact=lazy(()=> import('../Components/pages/Contact'))
const Containerr = lazy(()=> import('../Components/Container'))
// import Containerr from '../Components/Container'
// import ProductDetails from '../Components/ProductDetails'
const ProductDetails = lazy(()=> import('../Components/ProductDetails'))
const Login = lazy(()=>import('../Components/pages/Login'))
// import Login from '../Components/pages/Login'

// const DataContext = lazy(()=> import('../Store/auth-context'))

const MyRoutes=()=>{
    const Ctx = useContext(DataContext)
    console.log(Ctx)

    return(

        <Routes>
            
            <Route path='/' element ={<Suspense fallback={<p>Loading...</p>}><Home/></Suspense>}/>
            { Ctx.islog && <Route path='/store' element ={<Suspense fallback={<p>Loading...</p>}><Containerr/></Suspense>}/>}
            <Route path="/store/:productid" element={<Suspense fallback={<p>Loading...</p>}><ProductDetails /></Suspense>} />

            <Route path='/home' element ={<Suspense fallback={<p>Loading...</p>}><Home/></Suspense>}/>
            <Route path='/contact' element ={<Suspense fallback={<p>Loading...</p>}><Contact/></Suspense>}/>
            <Route path='/about' element ={<Suspense fallback={<p>Loading...</p>}><About/></Suspense>}/>
            <Route path='*' element ={<Suspense fallback={<p>Loading...</p>}><Home/></Suspense>}/>
            <Route path='/login' element={<Suspense fallback={<p>Loading...</p>}><Login/></Suspense>}/>
        </Routes>
    )
}
export default MyRoutes