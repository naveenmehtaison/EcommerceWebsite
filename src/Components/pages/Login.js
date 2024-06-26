import axios from 'axios' 
import { useNavigate } from 'react-router-dom'
import { useState,useContext } from 'react'
import DataContext from '../../Store/auth-context'
import classes from './login.module.css'
// import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import 'react-toastify/dist/ReactToastify.css';

// import { toast } from 'react-toastify'
import { toast } from 'react-toastify';
import { Alert } from 'bootstrap'

const Login=()=>{
    const [login,setlogin] = useState(true)
    const Ctx = useContext(DataContext)
    const navigate = useNavigate()
    // async function handlesignup(e){
    //   try{

    //   }
    // }
    const toastify=()=>{
      // toast.success('logged in ')
    }
    async function handlesignup(e){
      try{
        e.preventDefault()
        const obj = {Email:e.target.email.value, Password:e.target.password.value, Password2:e.target.password2.value}
        console.log(obj)
        if(obj.Password!==obj.Password2){
          
          console.log('password does not match')
            return
          

        }

        console.log(obj)
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDR5SSxYk2jPHpBjbYZNPoa76PPAmRPdo', {
            email: obj.Email,
            password: obj.Password,
            returnSecureToken: true 
        })
        console.log('signed up succesfu;;y')
      }
      catch(err){
          console.log(err + 'erroer occured')
             
      }
    }
    async function hanldeSubmit(e){
        try{
          const obj = {Email:e.target.email.value, Password:e.target.password.value}
            e.preventDefault()

            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDR5SSxYk2jPHpBjbYZNPoa76PPAmRPdo', {
                email: obj.Email,
                password: obj.Password,
                returnSecureToken: true 
            })
            toastify()
            Ctx.login()
            const arr = obj.Email.split("")
            console.log(response.data.idToken)
            localStorage.setItem('token',response.data.idToken)
            

            const fil_arr = arr.filter((ele,item)=>(
                ele!= '@' && ele!='.'
            ))
            const fin_email = fil_arr.join('')
            console.log(fin_email)
            console.log(fin_email)
            Ctx.email(fin_email)
            localStorage.setItem('email',fin_email)
            console.log(fin_email)
            // toast.success('login SUccesfull')

        }
        catch(err){
            console.log(err + 'erroer occured')
        }
        console.log(Ctx)
        navigate('/store')


    }
    return(
        <>
  
          { !login && 
            <div className={classes.loginpage}>
              <div className={classes.form}>
              

                <form onSubmit={hanldeSubmit} >
              
                    <div>
                      <h2>Log in</h2>
                      <label htmlFor='username'>Username</label>
                      <input id='username' required></input>
                      <label htmlFor='email'>Email</label>
                      <input id='email' required></input>
                      <label htmlFor='password'>Password</label>
                      <input id='password' required></input>
                      <button type='submit'>Submit</button>
                    </div>
                </form>
                    <button  style={{background:'lightgreen'}}onClick={()=>{setlogin(!login)}}>Create A new account</button>
                    <div/>
              </div>

            </div>
          }

          { login && 
          <div className={classes.loginpage}>
            <div className={classes.form}>
              <form onSubmit={handlesignup} >
              <div >
                <h2>Sign Up</h2>
                <label htmlFor='username'>Name</label>
                <input id='username' type='text'  required></input>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' required></input>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' minLength={6} required></input>
                <label htmlFor='password2'>Confirm Password</label>
                <input id='password2' type='password' required></input>
                <button type='submit'>Submit</button>
              </div>
            </form>
            <button  style={{background:'lightgreen'}}onClick={()=>{setlogin(!login)}}>ALready have an account</button>
            </div>
            
          </div>}
          <ToastContainer/>
        </>

    )
}
export default Login