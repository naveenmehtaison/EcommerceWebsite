import axios from 'axios' 
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../../Store/auth-context'
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
            console.log('arr',arr)
            const fil_arr = arr.filter((ele,item)=>(
                ele!= '@' && ele!='.'
            ))
            const fin_email = fil_arr.join('')
            console.log(fin_email)
            console.log(fin_email)
            Ctx.email(fin_email)
            console.log(Ctx)
        }
        catch(err){
            console.log(err + 'erroer occured')
        }
        console.log(Ctx)
        navigate('/store')


    }
    return(
        <form onSubmit={hanldeSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'></input>
            <label htmlFor="password"></label>
            <input type="password" id='password'></input>
            <button type="submit"> Login</button>
        </form>
    )
}
export default Login