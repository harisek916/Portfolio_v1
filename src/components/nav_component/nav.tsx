import { useState, useEffect } from "react";

import "./nav.css";

type NavProps = {
  name: string;
};


export function NavComponent({ name }: NavProps) {
  const [active, setActive] = useState(false);
  const [isMobile,setIsMobile] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setActive(false);
        setIsMobile(false);
      }
      else{
        setIsMobile(true);
      }
    };
    const handleScroll = ()=>{
      console.log("scrolle event triggered")
      if(window.scrollY > 600){
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll",handleScroll);
    return () =>{
       window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll",handleScroll);
    } // cleanup
  }, []);
  return (
    <header>
      <nav className={`navbar-hrs ${active ? 'active-navbar-hrs' : ''} ${scrolled?'navbar-scrolled-hrs':''}`}
      style={{height:active?"350px":"70px"}}
      >
        <div className="logo-wrapper-hrs">
          <div className="logo-hrs">{name}</div>
          {/* <input type="checkbox" id="menu-toggle-hrs"  /> */}
          <button
           className={`menu-icon-hrs ${active?'menu-active-hrs':'menu-inactive-hrs'}`} 
           onClick={() => { setActive(!active) }}
           >
            {active ? "\u2716" : "\u2630"}
          </button>
        </div>

        <ul 
        className={`nav-links-hrs ${active ? 'active-nav-links-hrs' : ''}`}
        
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}