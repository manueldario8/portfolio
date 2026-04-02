import './App.css'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/exports';
import { Navbar } from './components/exports';


function App() {

  const [variant, setVariant] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.className = variant;
  }, [variant]);

  return (
    <div className={variant}>

    <Router>
      <Routes>
        <Route element={<Navbar variant={variant} setVariant={setVariant}/>}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>

    </div>
  )
}

export default App
