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
                <div className="col-sm-12 col-lg-12 contentbox">
                    <div className="row">
                        <div className="col-2 col-sm-12 col-md-2 sidenav">
                           
                            <div id="accordion">
                            <div class="card">
                                    <div class="card-header cardpdng" id="headingID">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseID" aria-expanded="false" aria-controls="collapseID">
                                            <div className="row">
                                            <div className="col-md-1">
                                            
                                            <img src="../../assets/281.png" className="rounded-circle profileicon"></img>
                                            </div>
                                            <div className="col-md-8">
                                            <div className="profiletext">Amanda Leahy </div> 
                                            <div className="profileid">ID# 281 </div>
                                            </div>
                                            <div className="col-md-1"><i class="fa fa-caret-down expandarw" aria-hidden="true"></i></div>
                                            </div>                                                 
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseID" class="collapse" aria-labelledby="headingID" data-parent="#accordion">
                                        <div class="card-body profilebg">
                                            <div>
                                                <div className="prodetails">Designer since 6/11/2017</div>
                                                <div className="prodetails">Lifetime Rank: Master Couturier</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                        <div className="col-10 col-sm-6 col-md-10">
                            <div className="row cardpdng">
                                <div className="col-12"><i className="fa fa-angle-double-right arrowdbl" aria-hidden="true"></i><span className="header1"> Dashboard </span></div>
                                <div className="col-12">
                                    <div className="row cardpdng">
                                        <div className="col-md-4">
                                            <div class="card mb-4 box-shadow">
                                                <div class="card-header cardheaderbg">
                                                    Update & Breaking News
                                    </div>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item cardsubhdr"><i class="fa fa-check sicon" aria-hidden="true"></i> Chalk Talk
                                            <div className="carddate">November 30, 2018</div>
                                                    </li>
                                                    <li class="list-group-item cardsubhdr"><i class="fa fa-check sicon" aria-hidden="true"></i> Weekly Designer Emails
                                            <div className="carddate">November 27, 2018</div>
                                                    </li>
                                                    <li class="list-group-item cardsubhdr"><i class="fa fa-check sicon" aria-hidden="true"></i> Weekly Product Update
                                            <div className="carddate">October 20, 2018</div>
                                                    </li>
                                                    <li class="list-group-item cardsubhdr"><i class="fa fa-check sicon" aria-hidden="true"></i> Welcome!
                                            <div className="carddate">June 28, 2018</div>
                                                    </li>
                                                </ul>
                                                <div className="viewall"><a href=""><i class="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View All Company News</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="card mb-4 box-shadow">
                                                <div class="card-header cardheaderbg">
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

                                                <div className="viewallbr"><a href=""><i class="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View Designer Dollars Details</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="card mb-4 box-shadow">
                                                <div class="card-header cardheaderbg">
                                                    Your Personal Stats
                                    </div>
                                                <div className="font14">Current Period Estimated Title</div>
                                                <div className="hdr2">Executive Couturier</div>
                                                <ul class="list-group listgrpdng">
                                                    <li class="list-group-item d-flex justify-content-between align-items-center bluefont">
                                                        $740.01
    <span class="badge badge-pill gryfont">PV</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center bluefont">
                                                        $280,937.92
    <span class="badge badge-pill gryfont">TV</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center bluefont">
                                                        80
    <span class="badge badge-pill gryfont">PSQ</span>
                                                    </li>
                                                </ul>
                                                <div className="viewallbr"><a href=""><i class="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View Designer Dollars Details</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="card mb-4 box-shadow">
                                                <div class="card-header cardheaderbg">
                                                    Your Commissions
                                                </div>

                                                <table class="table table-striped tablecnt">
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

                                                <div className="viewallbr"><a href=""><i class="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View All Company News</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="card mb-4 box-shadow">
                                                <div class="card-header cardheaderbg">
                                                    Your Inventory Orders
                                                </div>

                                                <table class="table table-sm tablecnt">

                                                    <tbody>
                                                        <tr>
                                                            <th scope="row"><i class="fa fa-shopping-cart cartgry" aria-hidden="true"></i></th>
                                                            <td className="trhdrblue">Accepted </td>
                                                            <td className="trgry">#341951</td>
                                                            <td><i class="fa fa-arrow-circle-right cartblue" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><i class="fa fa-shopping-cart cartgry" aria-hidden="true"></i></th>
                                                            <td className="trhdrblue">Shipped</td>
                                                            <td className="trgry">#339699</td>
                                                            <td><i class="fa fa-arrow-circle-right cartblue" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><i class="fa fa-shopping-cart cartgry" aria-hidden="true"></i></th>
                                                            <td className="trhdrblue">Shipped</td>
                                                            <td className="trgry">#339699</td>
                                                            <td><i class="fa fa-arrow-circle-right cartblue" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><i class="fa fa-shopping-cart cartgry" aria-hidden="true"></i></th>
                                                            <td className="trhdrblue">Shipped</td>
                                                            <td className="trgry">#339699</td>
                                                            <td><i class="fa fa-arrow-circle-right cartblue" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><i class="fa fa-shopping-cart cartgry" aria-hidden="true"></i></th>
                                                            <td className="trhdrblue">Shipped</td>
                                                            <td className="trgry">#339699</td>
                                                            <td><i class="fa fa-arrow-circle-right cartblue" aria-hidden="true"></i></td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <div className="viewallbr"><a href=""><i class="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View All Company News</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="card mb-4 box-shadow">
                                                <div class="card-header cardheaderbg">
                                                    Your Next Title Promotion
                                                </div>
                                                <table class="table table-sm tablecnt">
                                                <div className="row">
                                                    <div className="col-md-3"></div>
                                                    <div className="col-md-7 ">
                                                        <div className="Promotionbg rounded-circle">0<span className="per-font">%</span></div>
                                                    </div>
                                                </div>
                                                </table>
                                                <div className="viewallbr"><a href=""><i class="fa fa-arrow-circle-right sicon" aria-hidden="true"></i> View All Company News</a></div>
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