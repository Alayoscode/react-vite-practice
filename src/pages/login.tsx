
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="h-[500px] w-[500px] bg-amber-50 border-0  rounded-2xl flex align-middle justify-center items-center flex-col gap-5"  >
    
     <h1 className="font-bold text-[35px]">Sign Up</h1>
        <Link to={"/contact"} className="h-12 w-[350px] rounded-full border-2 p-2 text-[15px] font-medium flex items-center justify-center hover:bg-blue-50" >Sign in With Google</Link>
        <Link to={"/"} className="h-12 w-[350px] rounded-full border-2 p-2 text-[15px] font-medium flex items-center justify-center hover:bg-gray-300" >Sign in With Apple</Link>
        <input  type="text" placeholder="Phone, email, or username" className="h-14 w-[350px] border border-gray-300 rounded outline-0"  style={{paddingLeft:10}}/>
        <button className="bg-black h-10 w-[350px] items-center rounded-full text-white font-bold cursor-pointer">Next</button>
        <button className="h-10 w-[350px] items-center border border-gray-300 rounded-full font-bold cursor-pointer">Forgot password?</button>
        <p className="text-gray-500 mt-20 flex justify-center"> Don't have an account? <span className="text-blue-700 cursor-pointer " >Sign up</span></p>
   </div>
        
    
  )
}

export default Login
