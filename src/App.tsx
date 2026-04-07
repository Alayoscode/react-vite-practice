import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Header from "./components/header";

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="min-h-screen bg-gray-100">
      {!hideHeader && <Header />}
      <main className={ !hideHeader ? "pt-20" : "" }>
        <div className="h-20"></div> {/* 16px extra space */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
