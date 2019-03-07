import React, { Component } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";

export default class SidenavBar extends Component {
  state = {
    msgModules: false,
    msgChkbox: false,
    menuList: null,
    menuDt: []
  };
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
    const userMenu = localStorage.getItem("UserDetails");
    if (userMenu) {
      this.setState({ menuList: JSON.parse(userMenu) });
      return;
    }
  };
  // Load side bnav bar details
  loadSideNav = () => {
    return this.state.menuDt.map(k => (
      <p>{k.menuName}</p>
    ));
    // return this.state.menuList.map(dt => (
    //   <div className="card">
    //     <div className="card-header cardpdng" id={dt}>
    //       <h5 class="mb-0">
    //         <button
    //           class="btn btn-link collapsed"
    //           data-toggle="collapse"
    //           data-target="#collapseTwo"
    //           aria-expanded="false"
    //           aria-controls="collapseTwo"
    //         >
    //           {/* <i class="fa fa-percent fafont" aria-hidden="true" /> */}
    //           {dt}
    //           <i class="fa fa-caret-down expandarw" aria-hidden="true" />
    //         </button>
    //       </h5>
    //     </div>
    //     <div
    //       id="collapseTwo"
    //       class="collapse"
    //       aria-labelledby={dt}
    //       data-parent="#accordion"
    //     >
    //       <div class="card-body">
    //         <div>
    //           <ul>
    //             <li>
    //               <i class="fa fa-angle-right farightarw" aria-hidden="true" />
    //               <a href="#">Commissions</a>
    //             </li>
    //             <li>
    //               <i class="fa fa-angle-right farightarw" aria-hidden="true" />
    //               <a href="#">Rank Advancement</a>
    //             </li>
    //             <li>
    //               <i class="fa fa-angle-right farightarw" aria-hidden="true" />
    //               <a href="#">Volumes</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // ));
  };
  showData = () => {
    let asDt = [];
    axios
      .get("http://localhost:9000/load-role-byid/guest", {})
      .then(res => {
        console.log("JSON", res.data.submenu);
        res.data.submenu.map(d => {
          d.modules.map(a => {
            console.log("JSONDate", a);
            // http://localhost:9000/load-mod?a=["5c80ec904fdb7712d382e183", "5c810967ffee5317d35bf2fc"]
            axios
              .get(`http://localhost:9000/load-mod?a=${a}`, {})
              .then(t => {
                console.log("Data Output", t.data);
                // this.setState({menuDt: t.data})
                // a = t.data
                asDt.push(t.data);
                // this.state.menuDt({});
                this.setState({menuDt: t.data})
                // t.data.map(ak => a.push(ak.menuName));
              })
              .catch(e => {
                throw e;
              });
          });
        });
        // http://localhost:9000/load-mod?a=["5c80ec904fdb7712d382e183", "5c810967ffee5317d35bf2fc"]
      })
      .catch(err => {
        throw err;
      });
    // return this.state.menuDt.map(s => (
    // console.log("menuList", this.state.menuDt);
  };

  dataLoad = () => {
    // console.log("Dtasdasdtassda", this.state.menuDt);
    return this.state.menuDt.map(k => (
      <div>
        <ul>
          <li>{k.menuName}</li>
        </ul>
      </div>
    ));
  };

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
              <div className="profilenav" />
              <div id="accordion">
                <div className="card">
                  <div className="card-header cardpdng" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i className="fa fa-home fafont" aria-hidden="true" />{" "}
                        Home
                      </button>
                    </h5>
                  </div>
                </div>
                {this.loadSideNav()}
                {this.showData()}

                {/* <div className="card">
                  <div className="card-header cardpdng" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i className="fa fa-percent fafont" aria-hidden="true" />
                        Commissions
                        <i
                          className="fa fa-caret-down expandarw"
                          aria-hidden="true"
                        />
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div>
                        <ul>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#">Commissions</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#">Rank Advancement</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#">Volumes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="card">
                  <div className="card-header cardpdng" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="fa fa-users fafont" aria-hidden="true" />
                        Organization
                        <i
                          className="fa fa-caret-down expandarw"
                          aria-hidden="true"
                        />
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div>
                        <ul>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#"> Customer List</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#"> Club Couture Customer</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#"> Personally Enrolled Team</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#"> Upcoming Promotions</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#">Downline's Orders</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#">New Designers List</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#">Team Performance</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#">Recent Activity List</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#"> Watts of Love Donations</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />
                            <a href="#">Tree Viewer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header cardpdng" id="headingFour">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <i
                          className="fa fa-calendar fafont"
                          aria-hidden="true"
                        />{" "}
                        Events{" "}
                        <i
                          className="fa fa-caret-down expandarw"
                          aria-hidden="true"
                        />
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div>
                        <ul>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />{" "}
                            <a href="#">Calendar</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />{" "}
                            <a href="#">Subscriptions</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header cardpdng" id="headingFive">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <i
                          className="fa fa-shopping-cart fafont"
                          aria-hidden="true"
                        />{" "}
                        Orders{" "}
                        <i
                          className="fa fa-caret-down expandarw"
                          aria-hidden="true"
                        />
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div>
                        <ul>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />{" "}
                            <a href="#">Inventory Orders</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />{" "}
                            <a href="#">Personal Use Orders</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />{" "}
                            <a href="#">Sales </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header cardpdng" id="headingSix">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <i
                          className="fa fa-user-plus fafont"
                          aria-hidden="true"
                        />{" "}
                        Resources{" "}
                        <i
                          className="fa fa-caret-down expandarw"
                          aria-hidden="true"
                        />
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div>
                        <ul>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />{" "}
                            <a href="#">Resources Library</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header cardpdng" id="headingSeven">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        <i
                          className="fa fa-building fafont"
                          aria-hidden="true"
                        />{" "}
                        Store{" "}
                        <i
                          className="fa fa-caret-down expandarw"
                          aria-hidden="true"
                        />
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseSeven"
                    className="collapse"
                    aria-labelledby="headingSeven"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div>
                        <ul>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />{" "}
                            <a href="#">Products</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-angle-right farightarw"
                              aria-hidden="true"
                            />{" "}
                            <a href="#">My Cart</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header cardpdng" id="headingeight">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseeight"
                        aria-expanded="false"
                        aria-controls="collapseeight"
                      >
                        <i
                          className="fa fa-list-alt fafont"
                          aria-hidden="true"
                        />{" "}
                        Company News{" "}
                        <i
                          className="fa fa-caret-down expandarw"
                          aria-hidden="true"
                        />
                      </button>
                    </h5>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header cardpdng" id="headingNine">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        <i
                          className="fa fa-university fafont"
                          aria-hidden="true"
                        />{" "}
                        Chalk University{" "}
                        <i
                          className="fa fa-caret-down expandarw"
                          aria-hidden="true"
                        />
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseNine"
                    className="collapse"
                    aria-labelledby="headingNine"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <i
                            className="fa fa-angle-right farightarw"
                            aria-hidden="true"
                          />{" "}
                          <a href="#">Business Basics</a>
                        </li>
                        <li>
                          <i
                            className="fa fa-angle-right farightarw"
                            aria-hidden="true"
                          />{" "}
                          <a href="#">Artwork, Products & Techniques</a>
                        </li>
                        <li>
                          <i
                            className="fa fa-angle-right farightarw"
                            aria-hidden="true"
                          />{" "}
                          <a href="#">Strong Selling</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col-12">
                  <i
                    className="fa fa-angle-double-right arrowdbl"
                    aria-hidden="true"
                  />
                  <span className="header1"> Dashboard </span>
                  {/* <p>ssss</p>
                  {this.state.menuDt.map(k => (
                    <p>{k.menuName}</p>
                  ))}
                  {this.dataLoad()} */}
                </div>
                <div className="col-12" />
              </div>
            </div>
          </div>
        </div>
        <div className="footernav col-md-12">
          <div className="row">
            <div className="col-sm-6">
              <a href="#">Privacy Policy</a> | Copyright © 2019 ROGUE All rights
              rserved
            </div>
            <div className="col-sm-6 alignRight" />
          </div>
        </div>
      </div>
    );
  }
}
