import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import { Home, About, SingleCake, Error } from './pages';

// import components
import { Navbar } from './components';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/singlecake/:id' element={<SingleCake />}/>
        <Route exact path='*' element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App
