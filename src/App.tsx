import './App.css'
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/exports';
import { Navbar } from './components/exports';
import { useTheme } from './context/ThemeContext';
useTheme;


function App() {

  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={theme}>

    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<Navbar/>}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>

    </div>
  )
}

export default App