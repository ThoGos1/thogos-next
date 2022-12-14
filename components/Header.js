import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import tlogo from "../public/svgtaulogo.svg"
import chev from "../public/chevron.svg"
import cart from "../public/caret.svg"
import { CSSTransition } from 'react-transition-group';


export default function Header(props) {
  return (
    <nav className='navbar'>

      <Link href={"/"}>
        <div className='navlog'>
          <Image src={tlogo} height={42} width={42} alt="ThoGos-logo" title="ThoGos Home" layout="fixed"/>
          <p className='nomove'>ThoGos</p>
        </div>
      </Link>

      <ul className='navbar-nav'> {props.children} </ul>

    </nav>
  )
}

export function NavItem(props) {

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    
    const closeDropdown = e => {
      if(!(e.srcElement.className == 'icon-button' || e.srcElement.className == 'menu-item')) {
        setOpen(false);
      }
      console.log(e.srcElement.className);
    };

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);

  },[]);


  return (
    <li ref={menuRef} id="geek" className='nav-item'>
      <a href='#' className='icon-button' id="geek" onClick={() => setOpen(!open) }>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}


export function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon="suir"
            rightIcon="suir"
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="23"
            rightIcon="suir"
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="suir">
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon="suir">HTML</DropdownItem>
          <DropdownItem leftIcon="suir">CSS</DropdownItem>
          <DropdownItem leftIcon="suir">JavaScript</DropdownItem>
          <DropdownItem leftIcon="suir">Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="suir">
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="43">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="34">Frog</DropdownItem>
          <DropdownItem leftIcon="45">Horse?</DropdownItem>
          <DropdownItem leftIcon="123">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}



















/*
export function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (

      <a href='#' className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>

        <span className='icon-button'>{props.leftIcon}</span>
        
        {props.children}

        <span className='icon-right'>{props.rightIcon}</span>

      </a>

    )

  }

  return (
    <div className='dropdown' style={{ height: menuHeight }}>

      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calcHeight}>

        <div className='menu'>

          <DropdownItem>My Profile</DropdownItem>

          <DropdownItem
            leftIcon={ <Image src={cart} height={42} width={42} alt="ThoGos-logo"/> }
            rightIcon={ <Image src={chev} height={42} width={42} alt="ThoGos-logo"/> }
            goToMenu='settings'
          >
          </DropdownItem>

        </div>

      </CSSTransition>



      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames='menu-secondary'>

        <div className='menu'>

          <DropdownItem goToMenu='main'>Back</DropdownItem>

          <DropdownItem
            leftIcon={ <Image src={cart} height={42} width={42} alt="ThoGos-logo"/> }
            rightIcon={ <Image src={chev} height={42} width={42} alt="ThoGos-logo"/> }>
          </DropdownItem>

          <DropdownItem goToMenu='main'>Back</DropdownItem>
          <DropdownItem goToMenu='main'>Back</DropdownItem>
          <DropdownItem goToMenu='main'>Back</DropdownItem>
          <DropdownItem goToMenu='main'>Back</DropdownItem>
          <DropdownItem goToMenu='main'>Back</DropdownItem>

        </div>

      </CSSTransition>









    </div>
  )

}















  return (
    <div className='navbar'>

      <div style={{ cursor: "pointer", width: "64px", height: "45px", marginLeft: "15px", marginTop: "15px" }}>
        <Link href={'/'}>
          <div className='logname'>
            <svg width="42" height="42" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_6_28)"/>
              <rect x="105.739" y="80.1391" width="44.5217" height="136.904" fill="white"/>
              <rect x="50.087" y="116.87" width="44.5217" height="155.826" transform="rotate(-90 50.087 116.87)" fill="white"/>
              <defs>
              <linearGradient id="paint0_linear_6_28" x1="128" y1="0" x2="128" y2="256" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F6A74C"/>
              <stop offset="1" stopColor="#DB672C"/>
              </linearGradient>
              </defs>
            </svg>

            <p style={{fontSize: "24px"}}>ThoGos</p>
          </div>
        </Link>
      </div>


      <div className='center2'>
        <nav>
          <Link href={'/notes'} >
            <a className='navitem'>Notes</a>
          </Link>
        </nav>


        <nav>
          <Link href={'/solver'}>
            <a className='navitem'>Calculators</a>
          </Link>
        </nav>
      </div>

      <p className='langchange'>Danish</p>

    </div>
  )
  */