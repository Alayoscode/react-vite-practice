
import { Link } from 'react-router-dom'


const Login = () => {
  return (
  <div className="flex justify-center px-4 py-10">
    <div className="w-full max-w-[500px] bg-green-900 border-0 rounded-2xl flex justify-center items-center flex-col gap-5 py-10">
      
      <h1 className="font-bold text-[35px]">Login</h1>
      
      <input type="text" placeholder="Phone, email, or username" className="h-12 w-full max-w-[300px] border border-gray-300 rounded outline-0 px-3" />
      <input type="password" placeholder="Password" className="h-12 w-full max-w-[300px] border border-gray-300 rounded outline-0 px-3" />
      <button className="bg-black h-10 w-full max-w-[300px] items-center rounded-full text-white font-bold cursor-pointer">Login</button>
      <button className="h-10 w-full max-w-[300px] items-center border border-gray-300 rounded-full font-bold cursor-pointer">Forgot password?</button>
      <p className="text-gray-500 mt-10 flex justify-center">
        Don't have an account? 
        <span className="text-blue-700 cursor-pointer ml-1">
          <Link to="/signup">Sign up</Link>
        </span>
      </p>
    </div>
  </div>
);
    
}


export default Login
