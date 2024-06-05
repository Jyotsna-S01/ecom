import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Privacy from "./Components/Privacy"
import Register from "./Components/Register"
import Login from "./Components/Login"
import Home from "./Components/Home"
import Forgot from "./Components/Forgot"
import Dashboard from "./Pages/User/Dashboard"


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/privacy" element={<Privacy/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgotpassword" element={<Forgot/>} />
              <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
