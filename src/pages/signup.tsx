import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div className='flex justify-center px-4 py-10'>
      <div className="w-full max-w-[500px] bg-green-900 border-0  rounded-2xl flex align-middle justify-center items-center flex-col gap-5"  >
    
     <h1 className="font-bold text-[35px]">Sign Up</h1>
      
        <input  type="text" placeholder="Phone, email, or username" className="h-12 w-full max-w-[300px] border border-gray-300 rounded outline-0 px-3" />
        <input  type="text" placeholder="Full Name" className="h-12 w-full max-w-[300px] border border-gray-300 rounded outline-0 px-3" />
        <input type="password" placeholder="Password" className="h-12 w-[300px] border border-gray-300 rounded outline-0"  style={{paddingLeft:10}}/>
        <input type="password" placeholder='Confirm Password' className="h-12 w-[300px] border border-gray-300 rounded outline-0"  style={{paddingLeft:10}}/>
        <button className="bg-black h-10 w-full max-w-[300px] items-center rounded-full text-white font-bold cursor-pointer">SignUp</button>
        
        <p className="text-gray-500 mt-20 flex justify-center"> You already have an account? <span className="text-blue-700 cursor-pointer " > <Link to={"/login"}>Login</Link></span></p>
   </div>
    </div>
        
    
  )
}
export default Signup;