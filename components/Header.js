import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import clogo from "../public/calclogo.svg"
import tlogo from "../public/svgtaulogo.svg"
import chev from "../public/chevron.svg"
import arrow from "../public/arrow.svg"
import { CSSTransition } from 'react-transition-group';
import blchev from "../public/blchev.svg"


export default function Header(props) {
  return (
    <nav className='navbar'>

      <Link href={"/"}>
        <div className='navlog'>
          <Image src={clogo} height={42} width={42} alt="logo" title="ThoGos Home" layout="fixed"/>
          <p className='nomove' style={{fontWeight: 'bold'}}>JavaLite</p>
        </div>
      </Link>

      <ul className='navbar-nav'> {props.children} </ul>

    </nav>
  )
}

export function NavItem(props) {

  const [open, setOpen] = useState(false);
  const menuRef = useRef('gekk');

  const [open2, setOpen2] = useState(false);

  useEffect(() => {
    
    const closeDropdown = e => {
      if(!(e.srcElement.className == 'icon-button' || e.srcElement.className == 'menu-item' || e.srcElement.className == 'icon-right' || e.srcElement.className == 'chev' || e.srcElement.className == 'arr')) {
        setOpen(false);
      }
      //console.log(e.srcElement.className);
    };

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);

  },[]);

  useEffect(() => {
    
    const closeDropdown = e => {
      if(!(e.srcElement.className == 'calc-button')) {
        setOpen2(false);
      }
      //console.log(e.srcElement.className);
    };

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);

  },[]);

  function closeall() {
    setOpen(false);
    setOpen2(false);
  }


  return (
    <div className='head-grid'>
      <li ref={menuRef} className='nav-item'>
        <a className='icon-button' onClick={() => { closeall(); setOpen(!open); }}>
          {props.icon}
        </a>

        {open && props.children}
      </li>

      <li className='nav-item'>
        <a className='calc-button' onClick={() => { closeall(); setOpen2(!open2); }}>
          Calculators
        </a>
      </li>

      <div style={{ display: open2 ? 'block' : 'none' }} className="calcdropdown">
        
        <Link href={"/solvers/combust"}>
          <a className="menu-item">
            <span className="calc-button"></span>
            Chemistry
            <span className="icon-chev">{ <Image src={blchev} height={23} width={23} className="chev2"/> }</span>
          </a>
        </Link>

        <Link href={"/solvers/mech"}>
          <a className="menu-item">
            <span className="calc-button"></span>
            Physics
            <span className="icon-chev">{ <Image src={blchev} height={23} width={23} className="chev2"/> }</span>
          </a>
        </Link>

      </div>

    </div>
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
      <a className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
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

          <DropdownItem
            leftIcon=""
            rightIcon={ <Image src={blchev} height={23} width={23} className="chev"/> }
            goToMenu="settings">
            Mathematics
          </DropdownItem>

          <DropdownItem
            leftIcon=""
            rightIcon={ <Image src={blchev} height={23} width={23} className="chev"/> }
            goToMenu="animals">
            Chemistry
          </DropdownItem>

          <DropdownItem
            leftIcon=""
            rightIcon={ <Image src={blchev} height={23} width={23} className="chev"/> }
            goToMenu="animals">
            Physics
          </DropdownItem>

          <DropdownItem
            leftIcon=""
            rightIcon={ <Image src={blchev} height={23} width={23} className="chev"/> }
            goToMenu="animals">
            Biology (Life Science)
          </DropdownItem>

          <DropdownItem
            leftIcon=""
            rightIcon={ <Image src={blchev} height={23} width={23} className="chev"/> }
            goToMenu="animals">
            Organic Chemistry
          </DropdownItem>

          <DropdownItem
            leftIcon=""
            rightIcon={ <Image src={blchev} height={23} width={23} className="chev"/> }
            goToMenu="animals">
            Biochemistry Lab
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
          <DropdownItem goToMenu="main" leftIcon={ <Image src={arrow} height={23} width={23} className="arr"/> }>
            Mathematics
          </DropdownItem>
          <DropdownItem leftIcon="">Algebra</DropdownItem>
          <DropdownItem leftIcon="">Trigonometry</DropdownItem>
          <DropdownItem leftIcon="">Geometry</DropdownItem>
          <DropdownItem leftIcon="">Funtions</DropdownItem>
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
            Animals
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
export function DropdownMenu2() {
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

  function DropdownItem2(props) {
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
          <DropdownItem2>2 worked</DropdownItem2>
          <DropdownItem2
            leftIcon="suir"
            rightIcon="suir"
            goToMenu="settings">
            Settings
          </DropdownItem2>
          <DropdownItem2
            leftIcon="23"
            rightIcon="suir"
            goToMenu="animals">
            Animals
          </DropdownItem2>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem2 goToMenu="main" leftIcon="suir">
            My Tutorial
          </DropdownItem2>
          <DropdownItem2 leftIcon="suir">HTML</DropdownItem2>
          <DropdownItem2 leftIcon="suir">CSS</DropdownItem2>
          <DropdownItem2 leftIcon="suir">JavaScript</DropdownItem2>
          <DropdownItem2 leftIcon="suir">Awesome!</DropdownItem2>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem2 goToMenu="main" leftIcon="suir">
            Animals
          </DropdownItem2>
          <DropdownItem2 leftIcon="43">Kangaroo</DropdownItem2>
          <DropdownItem2 leftIcon="34">Frog</DropdownItem2>
          <DropdownItem2 leftIcon="45">Horse?</DropdownItem2>
          <DropdownItem2 leftIcon="123">Hedgehog</DropdownItem2>
        </div>
      </CSSTransition>
    </div>
  );
}
*/

























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