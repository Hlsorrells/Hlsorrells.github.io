import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <div className='container container-flex'>
                    <nav style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem"
                    }}>
                        <Link to='/'>Home</Link> |{" "}
                        <Link to='/about'>About</Link> |{" "}
                        <Link to='/contact'>Contact</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;

