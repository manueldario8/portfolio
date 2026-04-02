import './App.css'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/exports';
import { Navbar } from './components/exports';


function App() {

  const [variant, setVariant] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"es" | "en">("es");

  useEffect(() => {
    document.body.className = variant;
  }, [variant]);

  return (
    <div className={variant}>

    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<Navbar variant={variant} setVariant={setVariant} language={language} setLanguage={setLanguage}/>}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>

    </div>
  )
}

export default App
