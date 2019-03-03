import React, { Component } from 'react';
import '../styles/styles.css';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default class Home extends Component {
    btnLoginClick = () =>{
        let path = `modules`;
        this.props.history.push(path);
    }
    render() {
        return (
            <div>
                <div class="row no-gutters">
                    <div class="col-6 col-md-2"><img src={logo} className="App-logo" alt="logo" /></div>
                    <div class="col-12 col-sm-6 col-md-10 headerbg"></div>
                </div>


                <div className="">
                    <div className="col-sm-12 navbg">

                        <div>
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-about-tab" data-toggle="pill" href="#pills-about" role="tab" aria-controls="pills-about" aria-selected="false">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-modules-tab" data-toggle="pill" href="#pills-modules" role="tab" aria-controls="pills-modules" aria-selected="false">Modules</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="false">Login</a>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="col-lg-12 contentbox">

                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div class="container">
                                    <div class="row contentpdng">
                                        <div class="col-sm-4">
                                            <h3>Column 1</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                                        </div>
                                        <div class="col-sm-4">
                                            <h3>Column 2</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                                        </div>
                                        <div class="col-sm-4">
                                            <h3>Column 3</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab">
                                <div class="container">
                                    <div class="row contentpdng">
                                        <div class="col-sm-12">
                                            <h3>About</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-modules" role="tabpanel" aria-labelledby="pills-modules-tab">
                                <div class="container">
                                    <div class="row contentpdng">
                                        <div class="col-sm-12">
                                            <h3>Modules</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div class="container">
                                    <div class="row contentpdng">
                                        <div class="col-sm-12">
                                            <h3>Contact Us</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                                <div class="container">
                                    <div class="row contentpdng">
                                        <div class="col-sm-12">

                                            <div className="row">
                                                <div className="col-sm-5 offset-md-4">


                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-heading">
                                                                <h2 class="text-center">LOGIN</h2>
                                                            </div>

                                                            <div class="modal-body">
                                                                <form action="" role="form">
                                                                    <div class="form-group">
                                                                        <div class="input-group">
                                                                            <span class="input-group-addon">
                                                                                <span class="fa fa-user facolor" aria-hidden="true"></span>
                                                                            </span>
                                                                            <input type="text" class="form-control" placeholder="User Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <div class="input-group">
                                                                            <span class="input-group-addon">
                                                                                <span class="fa fa-key facolor" aria-hidden="true"></span>
                                                                            </span>
                                                                            <input type="password" class="form-control" placeholder="Password" />

                                                                        </div>

                                                                    </div>

                                                                    <div class="form-group text-center">
                                                                        <button type="submit" class="btn btn-lg btn-primary btn-block mb-1 btnshadow"  onClick={this.btnLoginClick}>Login</button>
                                                                        <div className="floatl cpadding"> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input></div>
                                                                        <div class="floatl cpadding1"> Remember me</div>
                                                                        <div class="floatr">  <a href="#" class="btn btn-link">Forget Password</a></div>                                                                    </div>

                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
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
                                <b>Sandbox Mode</b> This site currently using sandbox2.
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}