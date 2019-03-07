import React, { Component } from "react";
import logo from "../../assets/logo.png";



export default class SidenavBar extends Component {
    render() {
        return (
            <div>
                <div className="row no-gutters">

                    <div className="col-xs-12 col-sm-6 col-md-10" />
                    <div className="col-md-12">
                        <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-light navbar-fixed-top navbar-inverse">
                            <a class="navbar-brand" href="#">  <img src={logo} className="App-logo" alt="logo" /></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon togglericon"><i class="fa fa-bars" aria-hidden="true"></i></span>
                            </button>

                            <div class="collapse navbar-collapse headerbg" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">
                                            <i class="fa fa-align-justify"></i>
                                        </a>
                                    </li>

                                </ul>
                                <ul class="navbar-nav navlpdng">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <i class="fa fa-envelope navicons" aria-hidden="true"></i>
                                            <span class="badge badge-info cartitem">12</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <i class="fa fa-bell navicons"></i>
                                            <span class="badge badge-success cartitem">4</span>
                                        </a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="../../assets/281.png" className="rounded-circle profileicon1"></img> Amanda Leahy
        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                         
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <i class="fa fa-shopping-cart navicons"></i> My Cart
            <span class="badge badge-primary cartitem">5</span>
                                        </a>
                                    </li>
                                </ul>


                            </div>
                        </nav>

                    </div>

                </div>
                <div className="col-sm-12 col-lg-12 contentbox">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-2 sidenav">

                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header cardpdng" id="headingID">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseID" aria-expanded="false" aria-controls="collapseID">
                                                <div className="row">
                                                    <div className="col-md-1">
                                                        <img src="../../assets/281.png" className="rounded-circle profileicon"></img>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="profiletext">Amanda Leahy </div>
                                                        <div className="profileid">ID# 281 </div>
                                                    </div>
                                                    <div className="col-md-1"><i className="fa fa-caret-down expandarw" aria-hidden="true"></i></div>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseID" className="collapse" aria-labelledby="headingID" data-parent="#accordion">
                                        <div className="card-body profilebg">
                                            <div>
                                                <div className="prodetails">Designer since 6/11/2017</div>
                                                <div className="prodetails">Lifetime Rank: Master Couturier</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header cardpdng" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <i className="fa fa-home fafont" aria-hidden="true"></i>  Home
                                            </button>
                                        </h5>
                                    </div>

                                </div>
                                <div className="card">
                                    <div className="card-header cardpdng" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <i className="fa fa-percent fafont" aria-hidden="true"></i> Commissions <i className="fa fa-caret-down expandarw" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <div>
                                                <ul>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Commissions</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Rank Advancement</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Volumes</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header cardpdng" id="headingThree">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <i className="fa fa-users fafont" aria-hidden="true"></i> Organization <i className="fa fa-caret-down expandarw" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            <div>
                                                <ul>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#"> Customer List</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#"> Club Couture Customer</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#"> Personally Enrolled Team</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#"> Upcoming Promotions</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Downline's Orders</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">New Designers List</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Team Performance</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Recent Activity List</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#"> Watts of Love Donations</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Tree Viewer</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header cardpdng" id="headingFour">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <i className="fa fa-calendar fafont" aria-hidden="true"></i> Events <i className="fa fa-caret-down expandarw" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div className="card-body">
                                            <div>
                                                <ul>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Calendar</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Subscriptions</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header cardpdng" id="headingFive">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                <i className="fa fa-shopping-cart fafont" aria-hidden="true"></i> Orders <i className="fa fa-caret-down expandarw" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                        <div className="card-body">
                                            <div>
                                                <ul>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Inventory Orders</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Personal Use Orders</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Sales </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header cardpdng" id="headingSix">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                <i className="fa fa-user-plus fafont" aria-hidden="true"></i> Resources <i className="fa fa-caret-down expandarw" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                        <div className="card-body">
                                            <div>
                                                <ul>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Resources Library</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header cardpdng" id="headingSeven">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                <i className="fa fa-building fafont" aria-hidden="true"></i> Store <i className="fa fa-caret-down expandarw" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                                        <div className="card-body">
                                            <div>
                                                <ul>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Products</a></li>
                                                    <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">My Cart</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header cardpdng" id="headingeight">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                                <i className="fa fa-list-alt fafont" aria-hidden="true"></i> Company News <i className="fa fa-caret-down expandarw" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header cardpdng" id="headingNine">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                <i className="fa fa-university fafont" aria-hidden="true"></i> Chalk University <i className="fa fa-caret-down expandarw" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul>
                                                <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Business Basics</a></li>
                                                <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Artwork, Products & Techniques</a></li>
                                                <li><i className="fa fa-angle-right farightarw" aria-hidden="true"></i> <a href="#">Strong Selling</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-10 col-sm-6 col-md-10">
                            <div className="row cardpdng1">
                                <div className="col-12"><i className="fa fa-angle-double-right arrowdbl" aria-hidden="true"></i><span className="header1"> Dashboard </span></div>
                                <div className="col-12">
                                    <div className="row cardpdng1">
                                        <div className="col-md-4">
                                            <div className="card mb-4 box-shadow">
                                                <div className="card-header cardheaderbg">
                                                    Update & Breaking News
                                    </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item cardsubhdr"><i className="fa fa-check sicon" aria-hidden="true"></i> Chalk Talk
                                            <div className="carddate">November 30, 2018</div>
                                                    </li>
                                                    <li className="list-group-item cardsubhdr"><i className="fa fa-check sicon" aria-hidden="true"></i> Weekly Designer Emails
                                            <div className="carddate">November 27, 2018</div>
                                                    </li>
                                                    <li className="list-group-item cardsubhdr"><i className="fa fa-check sicon" aria-hidden="true"></i> Weekly Product Update
                                            <div className="carddate">October 20, 2018</div>
                                                    </li>
                                                    <li className="list-group-item cardsubhdr"><i className="fa fa-check sicon" aria-hidden="true"></i> Welcome!
                                            <div className="carddate">June 28, 2018</div>
                                                    </li>
                                                </ul>
                                                <div className="viewall"><a href=""><i className="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View All Company News</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card mb-4 box-shadow">
                                                <div className="card-header cardheaderbg">
                                                    Your Designer Dollars
                                    </div>

                                                <div className="container">
                                                    <div className="col-md-12 currentbg">
                                                        <div className="currenttext">Current Balance</div>
                                                        <div className="currentbl">$0.00</div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="hdr1">Expiring Within 2 Weeks</div>
                                                        <div className="boxborder">
                                                            <div className="float-left">Amount</div>
                                                            <div className="float-right">Expires</div>
                                                        </div>
                                                        <div className="total">0</div>
                                                    </div>
                                                </div>

                                                <div className="viewallbr"><a href=""><i className="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View Designer Dollars Details</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card mb-4 box-shadow">
                                                <div className="card-header cardheaderbg">
                                                    Your Personal Stats
                                    </div>
                                                <div className="font14">Current Period Estimated Title</div>
                                                <div className="hdr2">Executive Couturier</div>
                                                <ul className="list-group listgrpdng">
                                                    <li className="list-group-item d-flex justify-content-between align-items-center bluefont">
                                                        $740.01
    <span className="badge badge-pill gryfont">PV</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center bluefont">
                                                        $280,937.92
    <span className="badge badge-pill gryfont">TV</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center bluefont">
                                                        80
    <span className="badge badge-pill gryfont">PSQ</span>
                                                    </li>
                                                </ul>
                                                <div className="viewallbr"><a href=""><i className="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View Details</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card mb-4 box-shadow">
                                                <div className="card-header cardheaderbg">
                                                    Your Commissions
                                                </div>

                                                <table className="table table-striped tablecnt">
                                                    <thead>
                                                        <tr className="bg-info tablehdr">
                                                            <th scope="col">Period</th>
                                                            <th scope="col">Paid as Title</th>
                                                            <th scope="col">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="table-success trhdr">
                                                            <td>December 2018</td>
                                                            <td>Master Couturier</td>
                                                            <td className="trhdrblue">$31,979.20</td>
                                                        </tr>
                                                        <tr className="table-secondary trhdr">
                                                            <td>November 2018	</td>
                                                            <td>Thornton</td>
                                                            <td className="trhdrblue">$45,665.06</td>
                                                        </tr>
                                                        <tr className="table-success trhdr">
                                                            <td>October 2018</td>
                                                            <td>Master Couturier</td>
                                                            <td className="trhdrblue">$53,643.57</td>
                                                        </tr>
                                                        <tr className="table-secondary trhdr">
                                                            <td>September 2018</td>
                                                            <td>Thornton</td>
                                                            <td className="trhdrblue">$45,658.61</td>
                                                        </tr>
                                                        <tr className="table-success trhdr">
                                                            <td>August 2018</td>
                                                            <td>Master Couturier</td>
                                                            <td className="trhdrblue">$28,492.30</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <div className="viewallbr"><a href=""><i className="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View Current Earnings</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card mb-4 box-shadow">
                                                <div className="card-header cardheaderbg">
                                                    Your Inventory Orders
                                                </div>

                                                <table className="table table-sm tablecnt">

                                                    <tbody>
                                                        <tr>
                                                            <th scope="row"><i className="fa fa-shopping-cart cartgry" aria-hidden="true"></i></th>
                                                            <td className="trhdrblue">Accepted </td>
                                                            <td className="trgry">#341951</td>
                                                            <td><i className="fa fa-arrow-circle-right cartblue" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><i className="fa fa-shopping-cart cartgry" aria-hidden="true"></i></th>
                                                            <td className="trhdrblue">Shipped</td>
                                                            <td className="trgry">#339699</td>
                                                            <td><i className="fa fa-arrow-circle-right cartblue" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><i className="fa fa-shopping-cart cartgry" aria-hidden="true"></i></th>
                                                            <td className="trhdrblue">Shipped</td>
                                                            <td className="trgry">#339699</td>
                                                            <td><i className="fa fa-arrow-circle-right cartblue" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><i className="fa fa-shopping-cart cartgry" aria-hidden="true"></i></th>
                                                            <td className="trhdrblue">Shipped</td>
                                                            <td className="trgry">#339699</td>
                                                            <td><i className="fa fa-arrow-circle-right cartblue" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><i className="fa fa-shopping-cart cartgry" aria-hidden="true"></i></th>
                                                            <td className="trhdrblue">Shipped</td>
                                                            <td className="trgry">#339699</td>
                                                            <td><i className="fa fa-arrow-circle-right cartblue" aria-hidden="true"></i></td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <div className="viewallbr"><a href=""><i className="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View All Orders</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card mb-4 box-shadow">
                                                <div className="card-header cardheaderbg">
                                                    Your Next Title Promotion
                                                </div>
                                                <table className="table table-sm tablecnt">
                                                    <div className="row">
                                                        <div className="col-md-3"></div>
                                                        <div className="col-md-7 ">
                                                            <div className="Promotionbg rounded-circle">0<span className="per-font">%</span></div>
                                                        </div>
                                                    </div>
                                                </table>
                                                <div className="viewallbr"><a href=""><i className="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View Promotion Details</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 btmmrgn">
                                            <div className="card mb-4 box-shadow">
                                                <div className="card-header cardheaderbg">
                                                    Your Team Activity
                                                </div>
                                                <div className="col-md-12 table-wrapper-scroll-y my-custom-scrollbar yourteam">
                                                    <div className="row">
                                                        <ul>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Lisa Butler has just placed an order.
                                                                <div className="orderno"> [338951] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Gloria Simmons has just placed an order
                                                                <div className="orderno">[338949] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Sharon Weaver has just placed an order.
                                                             <div className="orderno">[338945] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Danielle Barnes has just placed an order.
                                                             <div className="orderno">[338943] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Candace McBride has just placed an order.
                                                             <div className="orderno">[338941] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Melodie Colvin has just placed an order.
                                                             <div className="orderno">[338939] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Estephany Castellon has just placed an order.
                                                             <div className="orderno">[338938] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Amber Burkhart has just placed an order.
                                                             <div className="orderno">[338937] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Misty Markwell has just placed an order.
                                                             <div className="orderno">[338929] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Michael Loucks has just placed an order.
                                                             <div className="orderno">[338928] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Breanna Vincent has just placed an order.
                                                             <div className="orderno">[338923] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Ann Jean Gates has just placed an order.
                                                             <div className="orderno">[338922] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Alison Coleman has just placed an order.
                                                             <div className="orderno">[338914] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                            <li><i className="fa fa-angle-right arrowr" aria-hidden="true"></i> Melinda Flegel has just placed an order.
                                                             <div className="orderno">[338887] <span className="floatr orderdate">February 6, 2019</span></div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                                <div className="viewallbr"><a href=""><i className="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View All Recent Activity</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 btmmrgn">
                                            <div className="card mb-8 box-shadow">
                                                <div className="card-header cardheaderbg">
                                                    Your Team Members
                                                </div>
                                                <div className="col-md-12 table-wrapper-scroll-y my-custom-scrollbar">
                                                    <div className="row">
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <a href="#"><img src="../../assets/223.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" /></a>
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Kenneth Hess</h4>
                                                                        <div className="proid">#223</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <a href="#"><img src="../../assets/390.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" /></a>
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Cheryl McCartney</h4>
                                                                        <div className="proid">#390</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <a href="#"><img src="../../assets/441.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" /></a>
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Jessica Carpenter</h4>
                                                                        <div className="proid">#441</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <img src="../../assets/392.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Jessica Wilson</h4>
                                                                        <div className="proid">#392</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <img src="../../assets/441.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Linda Sadler</h4>
                                                                        <div className="proid">#403</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <img src="../../assets/441.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Sharon Fox</h4>
                                                                        <div className="proid">#511</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <img src="../../assets/475.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Sarah Paige-Gruber</h4>
                                                                        <div className="proid">#475</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <img src="../../assets/463.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Carol McLane</h4>
                                                                        <div className="proid">#463</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <img src="../../assets/523.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Regina Andari </h4>
                                                                        <div className="proid">#523</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <img src="../../assets/441.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Kimberly Maresch- Roberts</h4>
                                                                        <div className="proid">#557</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <img src="../../assets/441.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Narda Hirn</h4>
                                                                        <div className="proid">#611</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <div className="well well-sm">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-md-4">
                                                                        <img src="../../assets/441.png" alt="" className="img-rounded img-responsive rounded-circle profileimg" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-8">
                                                                        <h4 className="profilehdr">Gail Hopkins</h4>
                                                                        <div className="proid">#497</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="viewallbr"><a href=""><i className="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View Newest Distributors</a></div>
                                            </div>
                                        </div>
                                    </div>


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