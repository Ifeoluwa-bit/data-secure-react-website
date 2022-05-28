import { useState } from 'react'
import {SiDatabricks} from 'react-icons/si'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div name='top' className='navbar'>

        <div className="container">

            <div className="logo">
                <SiDatabricks className='icon' />
                <h1>Secured</h1>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recovery'>Recovery</Link></li>
                    <li><Link to='/cloud'>Cloud</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <button>Sign in</button>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {!click ? (<FaBars className='ham' />) : (<FaTimes className='ham' />)}
                </div>
            </div>
        </div>
  )
}
