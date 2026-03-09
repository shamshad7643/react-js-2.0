import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Course from "./pages/Course"
import Kodr from "./pages/Kodr"
import Kodx from "./pages/Kodx"

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />}>
      <Route path="/course/kodr" element={<Kodr />}/>
      <Route path="/course/kodx" element={<Kodx />}/>

        </Route>
     
       
      </Routes>

    </div>
  )
}

export default App