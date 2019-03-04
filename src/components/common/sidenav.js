import React, { Component } from "react";
import logo from "../../assets/logo.png";



export default class SidenavBar extends Component {
    render() {
        return (
            <div>
                <div className="row no-gutters">
                    <div className="col-6 col-md-2 logobr">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-10 headerbg" />
                </div>
                <div className="col-lg-12 contentbox">
                    <div className="row">
                        <div className="col-2 sidenav">
                            <div className="profilenav"></div>
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header cardpdng" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <i class="fa fa-home fafont" aria-hidden="true"></i>  Home
        </button>
                                        </h5>
                                    </div>

                                </div>
                                <div class="card">
                                    <div class="card-header cardpdng" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <i class="fa fa-percent fafont" aria-hidden="true"></i> Commissions <i class="fa fa-caret-down expandarw" aria-hidden="true"></i>
        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            <div>
                                                <ul>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Commissions</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Rank Advancement</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Volumes</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header cardpdng" id="headingThree">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <i class="fa fa-users fafont" aria-hidden="true"></i> Organization <i class="fa fa-caret-down expandarw" aria-hidden="true"></i>
        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            <div>
                                                <ul>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#"> Customer List</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#"> Club Couture Customer</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#"> Personally Enrolled Team</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#"> Upcoming Promotions</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Downline's Orders</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">New Designers List</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Team Performance</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Recent Activity List</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#"> Watts of Love Donations</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Tree Viewer</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header cardpdng" id="headingFour">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <i class="fa fa-calendar fafont" aria-hidden="true"></i> Events <i class="fa fa-caret-down expandarw" aria-hidden="true"></i>
        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div class="card-body">
                                            <div>
                                                <ul>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Calendar</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Subscriptions</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header cardpdng" id="headingFive">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <i class="fa fa-shopping-cart fafont" aria-hidden="true"></i> Orders <i class="fa fa-caret-down expandarw" aria-hidden="true"></i>
        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                        <div class="card-body">
                                            <div>
                                                <ul>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Inventory Orders</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Personal Use Orders</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Sales </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header cardpdng" id="headingSix">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            <i class="fa fa-user-plus fafont" aria-hidden="true"></i> Resources <i class="fa fa-caret-down expandarw" aria-hidden="true"></i>
        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                        <div class="card-body">
                                            <div>
                                                <ul>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Resources Library</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header cardpdng" id="headingSeven">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            <i class="fa fa-building fafont" aria-hidden="true"></i> Store <i class="fa fa-caret-down expandarw" aria-hidden="true"></i>
        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                                        <div class="card-body">
                                            <div>
                                                <ul>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Products</a></li>
                                                    <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">My Cart</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header cardpdng" id="headingeight">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                            <i class="fa fa-list-alt fafont" aria-hidden="true"></i> Company News <i class="fa fa-caret-down expandarw" aria-hidden="true"></i>
                                             </button>
                                        </h5>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header cardpdng" id="headingNine">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                            <i class="fa fa-university fafont" aria-hidden="true"></i> Chalk University <i class="fa fa-caret-down expandarw" aria-hidden="true"></i>
        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                                        <div class="card-body">
                                        <ul>
                                        <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Business Basics</a></li>
                                        <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Artwork, Products & Techniques</a></li>
                                        <li><i class="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Strong Selling</a></li>
                                        </ul>
                                </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-10">
                            <div className="row">
                                <div className="col-12"><i className="fa fa-angle-double-right arrowdbl" aria-hidden="true"></i><span className="header1"> Dashboard </span></div>
                                <div className="col-12">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footernav col-md-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <a href="#">Privacy Policy</a> | Copyright © 2019 ROGUE All
                            rights rserved
              </div>
                        <div className="col-sm-6 alignRight">

                        </div>
                    </div>
                </div>
            </div>



        )
    }
}