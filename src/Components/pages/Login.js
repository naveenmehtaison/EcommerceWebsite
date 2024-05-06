import axios from 'axios' 
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../../Store/auth-context'
import classes from './login.module.css'

const Login=()=>{
    const Ctx = useContext(DataContext)
    const navigate = useNavigate()
    async function hanldeSubmit(e){
        try{
            e.preventDefault()
            const obj = {Email:e.target.email.value, Password:e.target.password.value}
            console.log(obj)
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDR5SSxYk2jPHpBjbYZNPoa76PPAmRPdo', {
                email: obj.Email,
                password: obj.Password,
                returnSecureToken: true 
            })
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
        }
        catch(err){
            console.log(err + 'erroer occured')
        }
        console.log(Ctx)
        navigate('/store')


    }
    return(
        <>
  
          <form onSubmit={hanldeSubmit} >
            <div className={classes.control}>
              <label htmlFor='email'>Your Email</label>
              <input type='email' id='email' required />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Your Password</label>
              <input
                type='password'
                id='password'
                required
              />
            </div>
            <div className={classes.actions}>
              <button type='submit'>
                Submit Data
              </button>
              <button 
                type='button'
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >

              </button>
    
            </div>
          </form>

        </>

    )
}
export default Login