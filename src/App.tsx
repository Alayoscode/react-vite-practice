import { Route, Routes, useLocation } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Header from "./components/header"



function App() {

  const location = useLocation()

  console.log(location.pathname);
  


  return (
    <>   
     {location.pathname !== "/" && <Header/>}
    <Routes>
      <Route path= "/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>

  )
}

export default App
