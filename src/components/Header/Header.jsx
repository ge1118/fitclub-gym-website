import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import Close from '../../assets/close.png'
import { Link } from 'react-scroll'

const Header = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isMenuShown, setIsMenuShown] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  const closeMenu = () => setIsMenuShown(false);

  return (
    <div>
      <div className="header">
        <img src={Logo} alt="logo" className='logo' />
        {(isMobile) &&
          <div onClick={() => setIsMenuShown(!isMenuShown)}>
            <img src={isMenuShown ? Close : Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
          </div>
        }

        {(isMenuShown || !isMobile) ?
          (
            <ul className='header-menu'>
              <li><Link
                to='home'
                spy={true}
                smooth={true}
                activeClass='active'
                onClick={closeMenu}>Home</Link></li>
              <li><Link
                to='programs'
                spy={true}
                smooth={true}
                onClick={closeMenu}>Programs</Link></li>
              <li><Link
                to='reasons'
                spy={true}
                smooth={true}
                onClick={closeMenu}>Why Us</Link></li>
              <li><Link
                to='plans-container'
                spy={true}
                smooth={true}
                onClick={closeMenu}>Plans</Link></li>
              <li ><Link
                to='testimonials'
                spy={true}
                smooth={true}
                onClick={closeMenu}>Testimonials</Link></li>
            </ul>
          ) : ''}
      </div>
    </div >
  )
}

export default Header
