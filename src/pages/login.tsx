
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='flex justify-center'>
         <div className="h-[500px] w-[500px] bg-green-900 border-0  rounded-2xl flex align-middle justify-center items-center flex-col gap-5"  >
    
     <h1 className="font-bold text-[35px]">Login</h1>
        
        <input  type="text" placeholder="Phone, email, or username" className="h-12 w-[350px] border border-gray-300 rounded outline-0"  style={{paddingLeft:10}}/>
        <input type="password" placeholder="Password" className="h-12 w-[350px] border border-gray-300 rounded outline-0"  style={{paddingLeft:10}}/>
        <button className="bg-black h-10 w-[350px] items-center rounded-full text-white font-bold cursor-pointer">Login</button>
        <button className="h-10 w-[350px] items-center border border-gray-300 rounded-full font-bold cursor-pointer">Forgot password?</button>
        <p className="text-gray-500 mt-20 flex justify-center"> Don't have an account? <span className="text-blue-700 cursor-pointer " > <Link to={"/signup"}>Sign up</Link></span></p>
   </div>
        
    </div>
   
    
  )
}

export default Login
