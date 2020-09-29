import './Navbar.css';
import React from 'react';


const Navbar = () => {
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white py-3">
            <img className="navbar-brand" id="logo" src="https://juno-public.s3-us-west-1.amazonaws.com/on-juno%402x.png" alt="logo"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/" style={{color:"#ff75ff"}}>Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Company <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">About</a>
                            <a className="dropdown-item" href="/">Newsrooms</a>
                            <a className="dropdown-item" href="/">Careers</a>
                            <a className="dropdown-item" href="/">Partners</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Learn <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                       </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Blogs</a>
                            <a className="dropdown-item" href="/">Guides</a>
                            <a className="dropdown-item" href="/">Help Center</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Legal <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Privacy Policy</a>
                            <a className="dropdown-item" href="/">Terms of Use</a>
                            <a className="dropdown-item" href="/">Trademarks</a>
                        </div>
                    </li>

                </ul>
                <div>
                    <a href="/login" >
                        <button className="btn-login">Login</button>
                    </a>

                    <a href="/sign-up">
                        <button className="btn-sign-up sign-up-btn-animation">Signup</button>
                    </a>
                </div>
            </div>
        </nav>
    
    )
}


export default Navbar;