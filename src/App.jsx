
import './App.css'
import Home from './pages/Home.jsx'
import ContactMe from './pages/ContactMe'
import { Routes, Route, HashRouter } from "react-router-dom"

function App() {
  
<HashRouter>
  <App />
</HashRouter>
  return <>
  <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "/contact-me" element = {<ContactMe />} />
  </Routes>
    </>
  
}

export default App
