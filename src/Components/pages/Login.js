import axios from 'axios' 
import { useNavigate } from 'react-router-dom'
const Login=()=>{
    const navigate = useNavigate()
    async function hanldeSubmit(e){
        try{
            e.preventDefault()
            const obj = {Email:e.target.email.value, Password:e.target.password.value}
            const response = await 
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDR5SSxYk2jPHpBjbYZNPoa76PPAmRPdo',{
            email: obj.Email,
            password: obj.Password,
            returnSecureToken: true 
        })}
        catch(err){
            console.log(err + 'erroer occured')
        }
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