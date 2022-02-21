import { Link } from "react-router-dom";
import logo from '../images/android-chrome-192x192.png';

const Header = () => {
    return (
        <>
            <header>
                <div className='container container-flex'>
                    <div className='container container-flex'>
                        <div className="logoContainer">
                            <img src={logo} alt='logo' className="logo" />
                        </div>
                        <nav style={{
                            borderBottom: "solid 1px",
                            paddingBottom: "1rem"
                        }}>
                            <Link to='/'>Home</Link> |{" "}
                            <Link to='/about'>About</Link> |{" "}
                            <Link to='/contact'>Contact</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;

