import React, { Component } from "react";
import "../styles/styles.css";
import { withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";
import UserRegistration from './registration';
import AdminMenu from './addMenu';
import ModulesList from './moduleList';

const usersJson = [
  {
    username: "surendra",
    password: "123",
    role: "user",
    menuList: ["Organisation", "Comissions", "Events"]
  },
  {
    username: "jeff",
    password: "123",
    role: "enterprise_admin",
    menuList: [
      "Organisation",
      "Comissions",
      "Events",
      "Orders",
      "Resources",
      "Store",
      "Company News"
    ]
  },
  {
    username: "vikram",
    password: "123",
    menuList: ["Organisation", "Resources", "Store", "Company News"]
  }
];

export default class Home extends Component {
  state = {
    userName: "",
    userPass: "",
    usersList: [],
    errMsgLoginStatus: false
  };
  componentDidMount() {
    this.setState({ usersList: usersJson });
  }
  btnLoginClick = () => {
    this.state.usersList.map(userDt => {
      if (userDt.username === this.state.userName) {
        // console.log("true");
        let path = `modules`;
        this.props.history.push(path);
        localStorage.setItem("UserDetails", JSON.stringify(userDt.menuList));
      } else {
        this.setState({ errMsgLoginStatus: true });
      }
    });
    return;
    // let path = `modules`;
    // this.props.history.push(path);
  };
  render() {
    // console.log("user List", this.state.usersList);
    return (
      <div>
        <div className="row no-gutters">
          <div className="col-6 col-md-2">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-12 col-sm-6 col-md-10 headerbg" />
        </div>

        <div>
          <div className="col-sm-12 navbg">
            <div>
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Registration
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-about-tab"
                    data-toggle="pill"
                    href="#pills-about"
                    role="tab"
                    aria-controls="pills-about"
                    aria-selected="false"
                  >
                    Admin
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-modules-tab"
                    data-toggle="pill"
                    href="#pills-modules"
                    role="tab"
                    aria-controls="pills-modules"
                    aria-selected="false"
                  >
                    Modules
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-login-tab"
                    data-toggle="pill"
                    href="#pills-login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="false"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 contentbox">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="container">
                  <div className="row contentpdng">
                    <div className="col-sm-4">
                      <h3>User Registration</h3>
                      <UserRegistration />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit...
                      </p>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris...
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <h3>Column 2</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit...
                      </p>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris...
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <h3>Column 3</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit...
                      </p>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-about"
                role="tabpanel"
                aria-labelledby="pills-about-tab"
              >
                <div className="container">
                  <div className="row contentpdng">
                    <div className="col-sm-12">
                      <h3>Add Menu</h3>
                      <AdminMenu />                      
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-modules"
                role="tabpanel"
                aria-labelledby="pills-modules-tab"
              >
                <div className="container">
                  <div className="row contentpdng">
                    <div className="col-sm-12">
                      <h3>Modules</h3>
                      <ModulesList />
                      {/* <ul className="moduleList">
                        <li>
                          <input type="checkbox" name="vehicle1" value="Bike" />
                          Home
                        </li>
                        <li>
                          <input type="checkbox" name="vehicle1" value="Bike" />
                          Contact Us
                        </li>
                        <li>
                          <input type="checkbox" name="vehicle1" value="Bike" />
                          About Us
                        </li>
                        <li>
                          <input type="checkbox" name="vehicle1" value="Bike" />
                          Login
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="container">
                  <div className="row contentpdng">
                    <div className="col-sm-12">
                      <h3>Contact Us</h3>
                      <p>Yoofoo technologies</p>
                      <p>
                        Yoofoo technologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
              >
                <div className="container">
                  <div className="row contentpdng">
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-5 offset-md-4">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-heading">
                                <h2 className="text-center">LOGIN</h2>
                              </div>

                              <div className="modal-body">
                                <div className="form-group">
                                  <div className="input-group">
                                    <span className="input-group-addon">
                                      <span
                                        className="fa fa-user facolor"
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="User Name"
                                      value={this.state.userName}
                                      onChange={e =>
                                        this.setState({
                                          userName: e.target.value
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="input-group">
                                    <span className="input-group-addon">
                                      <span
                                        className="fa fa-key facolor"
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="Password"
                                      value={this.state.userPass}
                                      onChange={p =>
                                        this.setState({
                                          userPass: p.target.value
                                        })
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="form-group text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-lg btn-primary btn-block mb-1 btnshadow"
                                    onClick={this.btnLoginClick}
                                  >
                                    Login
                                  </button>
                                  <div className="floatl cpadding">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="exampleCheck1"
                                    />
                                  </div>
                                  <div className="floatl cpadding1">
                                    Remember me
                                  </div>
                                  <div className="floatr">
                                    <a href="#" className="btn btn-link">
                                      Forget Password
                                    </a>
                                  </div>
                                </div>
                                <br />
                                <br />
                                <div className="col-md-12">
                                  {this.state.errMsgLoginStatus ? (
                                    <div
                                      className="alert alert-danger"
                                      role="alert"
                                    >
                                      Invalid Login details
                                    </div>
                                  ) : (
                                    <div />
                                  )}
                                </div>
                                    <div className="floatr">
                                      {" "}
                                      <a href="#" className="btn btn-link">
                                        Forgot Password
                                      </a>
                                    </div>{" "}
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
          </div>
          <div className="footernav col-md-12">
            <div className="row">
              <div className="col-sm-6">
                <a href="#">Privacy Policy</a> | Copyright © 2019 ROGUE All
                rights rserved
              </div>
              <div className="col-sm-6 alignRight">
                {/* <b>Sandbox Mode</b> This site currently using sandbox2. */}
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}
