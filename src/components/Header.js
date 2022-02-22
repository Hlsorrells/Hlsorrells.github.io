import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/android-chrome-192x192.png';
import './Header.css';

const Header = () => {
    // assigning location variable
    const { pathname } = useLocation();

    // JS split method to get the name of the path in array
    const splitLocation = pathname.split('/');

    return (
        <>
            <header>
                <div className='container'>
                    <div className='logoContainer'>
                        <img src={logo} alt='logo' className='logo' />
                    </div>
                    <nav>
                        {/* Check the current pathname using JS ternary operator & if true setting class to active*/}
                        <NavLink className={splitLocation[1] === '' ? 'active' : ''} to='/' >Home</NavLink> {' '}
                        <NavLink className={splitLocation[1] === 'about' ? 'active' : ''} to='/about' >About</NavLink> {' '}
                        <NavLink className={splitLocation[1] === 'contact' ? 'active' : ''} to='/contact' >Contact</NavLink>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;

