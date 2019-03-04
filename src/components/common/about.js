import React, { Component } from 'react';
import '../styles/styles.css';
import logo from '../../assets/logo.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="row paddinglr">
                    <div className="col-sm-2">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="col-sm-10 headerbg">
                    </div>
                </div>
                <div className="row paddinglr">
                    <div className="col-sm-12 navbg">
                        <div>
                            <ul class="nav nav-pills nav-fill">
                                <li class="nav-item">
                                    <a class="nav-link" href="home.js">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="about.js">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact Us	</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Modules</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 contentbox">
                        <div class="container">
                            <div class="row contentpdng">
                                <div class="col-sm-6">
                                    <h3>About 1</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                                </div>
                                <div class="col-sm-6">
                                    <h3>About 2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                                </div>
                               
                            </div>
                        </div>

                    </div>
                    <div className="footernav col-md-12">
                            <div class="row">
                                <div class="col-sm-6">
                                <a href="#">Privacy Policy</a>  | Copyright © 2019 ROGUE All rights rserved
                                </div>
                                <div class="col-sm-6 alignRight">
                                {/* <b>Sandbox Mode</b> This site currently using sandbox2. */}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}