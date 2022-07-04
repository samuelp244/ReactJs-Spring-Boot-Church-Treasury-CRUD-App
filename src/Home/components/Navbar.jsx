/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar(props){
    return (
        <div className='header'>
            <nav className={"navbar navbar-expand-lg p-3 bg-light bg-white "+props.navStyle}>
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Beersheba</a> */}
                    <Link className="navbar-brand" to="/" >Beersheba</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="">A Short History</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="">Our Vision</Link>
                        </li>
                        <li className="nav-item">
                        {/* <a className="nav-link locations-button" href="">Locations</a> */}
                        <Link className="nav-link locations-button" to="/locations">Locations</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/meetings">Meetings</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="">Gallery</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="">Live</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="">Contact us</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Login
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/treasury/">Treasury</Link></li>
                            <li><Link className="dropdown-item" to="/" >Sunday School</Link></li>
                        </ul>
                        </li>
                        
                    </ul>
                    </div>

                </div>
            </nav>
      </div>
    );
};