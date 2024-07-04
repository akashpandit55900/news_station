import React from 'react';
import { Link, useLocation } from "react-router-dom";

const NavBar = (props) => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div>
            <nav className='navbar navbar-shadowEffect fixed-top navbar-expand-lg navbar-dark bg-light' style={{ height: '50px' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fst-italic" to="/">
                        <img src="https://newsstation.media/wp-content/uploads/2020/02/news-title-png.png" alt="logo" style={{ height: '45px' }} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item fw-medium">
                                <Link className={`nav-link ${isActive('/general')}`} aria-current="page" to="/general">Home</Link>
                            </li>
                            <li className="nav-item fw-medium"><Link className={`nav-link ${isActive('/business')}`} to="/business">Business</Link></li>
                            <li className="nav-item fw-medium"><Link className={`nav-link ${isActive('/entertainment')}`} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item fw-medium"><Link className={`nav-link ${isActive('/general')}`} to="/general">General</Link></li>
                            <li className="nav-item fw-medium"><Link className={`nav-link ${isActive('/health')}`} to="/health">Health</Link></li>
                            <li className="nav-item fw-medium"><Link className={`nav-link ${isActive('/science')}`} to="/science">Science</Link></li>
                            <li className="nav-item fw-medium"><Link className={`nav-link ${isActive('/sports')}`} to="/sports">Sports</Link></li>
                            <li className="nav-item fw-medium"><Link className={`nav-link ${isActive('/technology')}`} to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
