import Projects from './routes/projects/Projectss'
import About from './routes/about/About'
import Contact from './routes/contact/Contac'
import Home from './routes/home/Home'
import Nav from './components/nav/Nav'
import Heroo from './components/hero/Heroo'
import {Routes , Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">

      <Nav />

      <Heroo />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>
    
    </div>
  )
}

export default App
