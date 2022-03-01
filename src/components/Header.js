import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/android-chrome-192x192.png';

const Header = () => {
    // assigning location variable
    const { pathname } = useLocation();

    // JS split method to get the name of the path in array
    const splitLocation = pathname.split('/');

    return (
        <>
            <header className='navbar-dark bg-transparent'>
                <nav className='navbar navbar-expand{-sm|-md|-lg|-xl|-xxl}'>
                    <div className='container-fluid'>
                        <a className='navbar-brand' href='/'>
                            <img src={logo} alt='logo' className='logo' />
                        </a>
                        <div>
                            {/* Check the current pathname using JS ternary operator & if true setting class to active*/}
                            <NavLink exact className={`nav-link ${splitLocation[1] === '' ? 'active' : ''}`} to='/' >Home</NavLink> {' '}
                            <NavLink className={`nav-link ${splitLocation[1] === 'about' ? 'active' : ''}`} to='/about' >About</NavLink> {' '}
                            <NavLink className={`nav-link ${splitLocation[1] === 'projects' ? 'active' : ''}`} to='/projects' >Projects</NavLink> {' '}
                            <NavLink className={`nav-link ${splitLocation[1] === 'contact' ? 'active' : ''}`} to='/contact' >Contact</NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;

