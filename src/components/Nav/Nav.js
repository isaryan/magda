import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import Magda from '../../assets/Magda.svg';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion"
import './Nav.css';

function Nav() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const location = useLocation();
    const local = location.pathname;
    const item={
        exit:{
          opacity:0,
          height:0,
          transition:{
            ease:"easeInOut",
            duration:0.45,
          }
        }
      }

return (
    <div>
    <div className="navbar">
        <div className='logo'>
            <a href="/"><img src={Magda} alt="Magda de Paiva logo" /></a>
        </div>
        <div id="Menu" onClick={handleClick}><FaBars size={30}/></div>
        <AnimatePresence>
        {
            nav && (
                <motion.ul
                    variants={item}
                    initial={{height: 0, opacity:0}}
                    animate={{height: "100vh", opacity:1}}
                    transition={{duration: 0.45}}
                    exit="exit"
                    >
                    <span className="close" onClick={handleClick}>&times;</span>
                    <li className={local === "/" ? "active" : ""}><a href='/'>home</a></li>
                    <li className={local === "/sobre" ? "active" : ""}><a href='/sobre'>sobre</a></li>
                    <li className={local === "/declaracao" ? "active" : ""}><a href='/declaracao'>declaração</a></li>
                    <li className={local === "/portfolio" ? "active" : ""}><a href='/portfolio'>portfolio</a></li>
                    <li className={local === "/contato" ? "active" : ""}><a href='/contato'>contato</a></li>
                </motion.ul>
            )
        }
        </AnimatePresence>
    </div>
    <nav className="WideMenu">
        <div className="wide-header">
            <div className='logo'>
                <a href='/'><img src={Magda} alt="Magda de Paiva logo" /></a> 
            </div>
            <div className='wide-name'>
            <h1>Magda Paiva</h1>
            </div>
        </div>
        <div className='list'>
            <ul>
                <li className={local === "/" ? "active" : ""}><a href='/'>home</a></li>
                <li className={local === "/sobre" ? "active" : ""}><a href='/sobre'>sobre</a></li>
                <li className={local === "/declaracao" ? "active" : ""}><a href='/declaracao'>declaração</a></li>
                <li className={local === "/portfolio" ? "active" : ""}><a href='/portfolio'>portfolio</a></li>
                <li className={local === "/contato" ? "active" : ""}><a href='/contato'>contato</a></li>
            </ul>
        </div>
    </nav>
    </div>
    );
}

export default Nav;