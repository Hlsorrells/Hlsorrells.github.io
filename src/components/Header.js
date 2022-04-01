import { Link, useLocation } from 'react-router-dom';
import logo from '../images/android-chrome-192x192.png';

const Header = () => {
    // assigning location variable
    let location = useLocation();

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
                            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                            <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
                            <Link to="/projects" className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>Projects</Link>
                            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
