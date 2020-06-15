import React from 'react'
import './styles.css'


const Header = () => (
    // <header id="main-header">DASHBOARD</header>
    <div id="main-header" class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal ">
            <div class="blobs-container">
                <span>DASHBOARD</span>
                <div class="blob red"></div>
            </div>
        </h5>
        <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-white" href="#">Features</a>
        </nav>
        {/* <a class="btn btn-outline-primary" href="#">Sign up</a> */}
    </div>
)

export default Header