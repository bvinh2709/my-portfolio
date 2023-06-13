import Contact from "./components/main/Contact"
import Hero from "./components/main/Hero"
import Who from "./components/main/Who"
import Works from "./components/main/Works"
import { Box } from "@mui/material"
import Navbar from './components/main/Navbar'


import {
  BrowserRouter,
  Routes,
  Route,
}
from 'react-router-dom'
import Achievement from "./components/story/Achievement"
import Memes from "./components/story/Memes"

function App() {

  return (
    <>
      <BrowserRouter>
        <Box display='flow' sx={{ backgroundImage: "url('../public/img/ruvim.jpg')" }}>
          <Box>
            <Navbar />
            <Routes>
              <Route path='/' element={<Hero />} />
              <Route path='/who' element={<Who />} />
              <Route path='/achievement' element={<Achievement />} />
              <Route path='/memes' element={<Memes />} />
              <Route path='/works' element={<Works />} />
              <Route path='/contact' element={<Contact />} />
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default App
