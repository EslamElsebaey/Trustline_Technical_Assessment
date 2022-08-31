/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"


const Header = () => {
    return (
       <>
       <header>
        <Link to={"/data"} className='task btn text-uppercase' >Dev Task</Link>
        <div className="layer"></div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
            <a className="navbar-brand" ><img src={logo} alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className='toggle-btn'><i className="fa-solid fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav main-links  ">
                    <li className="nav-item">
                    <a className="nav-link" >ترست لاين</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" >لماذا ترست لاين ؟</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" >آلية العمل</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" >تواصل معنا</a>
                    </li>
                </ul>
                <ul className="navbar-nav extra-links ">
                    <li className="nav-item">
                        <button className='nav-link navbar-btn '>دخول</button>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link english" >ENG</a>
                    </li>
                </ul>
            </div>
            </div> 
        </nav>
        <div className="header-content">
            <h1>ترست لاين تقدم لأعمالك الحماية </h1>
            <p>ترست لاين شركة سعودية متخصصة في تقديم مجموعة واسعة من خدمات وحلول الأمن السيبراني.</p>
            <button className=''>تواصل معنا </button>
        </div>
       </header>
       </>
    );
}

export default Header;
