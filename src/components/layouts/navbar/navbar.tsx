import { Link, Outlet } from 'react-router-dom';
import { ENicon, ESicon, SUNicon, MOONicon } from '../../../assets/exports';
import { useTheme } from '../../../context/ThemeContext';
import './navbar1.css';
import React from 'react';
import { ProfilePicture2 } from '../../../assets/exports';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [language, setLanguage] = React.useState<"es" | "en">("es");
  const [isOpen, setIsOpen] = React.useState(false); // 👈 clave

  const texts = {
    es: {
      works: "Proyectos",
      about: "Sobre mí",
      dev: "Desarrollo",
      source: "Código"
    },
    en: {
      works: "Works",
      about: "About me",
      dev: "Development",
      source: "Source"
    }
  };

  return (
    <>
      <nav className={`navbar ${theme}`}>
        <div className="inner-nav">

          {/* LEFT */}
          <div className="nav-left">
            <div className='pic-pr-nav'>
              <img src={ProfilePicture2} alt="Manuel Darío Dev" />
            </div>

            <Link to="/home" className="logo">
              Manuel Darío
            </Link>
          </div>

          {/* HAMBURGER (mobile) */}
          <button 
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* CENTER */}
          <div className={`nav-center ${isOpen ? "open" : ""}`}>
            <Link to="" onClick={() => setIsOpen(false)}>
              {texts[language].works}
            </Link>

            <Link to="" onClick={() => setIsOpen(false)}>
              {texts[language].about}
            </Link>

            <Link to="" onClick={() => setIsOpen(false)}>
              {texts[language].dev}
            </Link>

            <a 
              href="https://github.com/manueldario8" 
              target='_blank' 
              className="source-icon"
              onClick={() => setIsOpen(false)}
            >
              <svg className='git-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72z"/>
              </svg>
              {texts[language].source}
            </a>
          </div>

          {/* RIGHT */}
          <div className="nav-right">
            <button onClick={toggleTheme}>
              <img
                src={theme === "dark" ? SUNicon : MOONicon}
                className="icon"
              />
            </button>

            {language === "es" ? (
              <button onClick={() => setLanguage("en")}>
                <img src={ENicon} className="icon" />
              </button>
            ) : (
              <button onClick={() => setLanguage("es")}>
                <img src={ESicon} className="icon" />
              </button>
            )}
          </div>

        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;