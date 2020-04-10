import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/home">Friends Zone</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link headBtn" href="#home"><b>Home</b><span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link headBtn" href="#friend-list"><b>Friends</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link headBtn" href="#about-me"><b>About Me</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link headBtn" href="#policy"><b>Privacy Policy</b></a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}
export default Header;