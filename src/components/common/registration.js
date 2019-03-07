import React, { Component, Fragment } from "react";
import axios from "axios";
import { postData } from "../services/services";
import "../styles/styles.css";

export default class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      userPassword: "",
      email_id: "",
      mobile_no: "",
      packageType: "Basic",
      status: "Active",
      creditCardNumber: ""
    };
  }
  componentDidMount() {    
  }
  saveUserDetails = async () => {   
    console.log('Package', this.state.packageType);     
    axios
      .post("http://localhost:9000/create-user", {
        creditCardNumber: this.state.creditCardNumber,
        email_id: this.state.email_id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        mobile_no: this.state.mobile_no,
        packageType: this.state.packageType,
        status: "Active",
        userName: this.state.userName,
        userPassword: this.state.userPassword
      })
      .then(res => {
        //on success
        console.log(res);
      })
      .catch(error => {
        //on error
      });

    // const getCompaniesList = postData(`http://192.168.1.109:8000/create-user`,JSON.stringify(userJson));
    // console.log('Data', await getCompaniesList);
  };
  render() {
    return (
      <Fragment>
        <div className="modal-body">
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <span className="fa fa-user facolor" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={this.state.userName}
                onChange={u => {
                  console.log("User Name", u.target.value);
                  this.setState({ userName: u.target.value });
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <span className="fa fa-user facolor" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={f => this.setState({ firstName: f.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <span className="fa fa-user facolor" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={l => this.setState({ lastName: l.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <span className="fa fa-key facolor" aria-hidden="true" />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                value={this.state.userPassword}
                onChange={p => this.setState({ userPassword: p.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <span className="fa fa-envelope facolor" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Email Id"
                value={this.state.email_id}
                onChange={e => this.setState({ email_id: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <span className="fa fa-mobile facolor" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number"
                value={this.state.mobile_no}
                onChange={m => this.setState({ mobile_no: m.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <span className="fa fa-mobile facolor" aria-hidden="true" />
              </span>
              <select className="form-control" onChange={(e) => this.setState({packageType: e.target.value})}>
               
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Professional">Professional</option>
                <option value="Ultimate">Ultimate</option>
              </select>
            </div>
          </div>
          {/* <div className="container">
            <div className="row contentpdng">
              <div className="col-sm-12">
                <h3>Package Type</h3>
                <ul className="moduleList">
                  <li>
                    <input type="checkbox" name="vehicle1" value="Basic" />
                    Basic
                  </li>
                  <li>
                    <input type="checkbox" name="vehicle1" value="Standard" />
                    Standard
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="vehicle1"
                      value="Professional"
                    />
                    Professional
                  </li>
                  <li>
                    <input type="checkbox" name="vehicle1" value="Ultimate" />
                    Ultimate
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <span
                  className="fa fa-credit-card facolor"
                  aria-hidden="true"
                />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Card Number"
                value={this.state.creditCardNumber}
                onChange={c =>
                  this.setState({ creditCardNumber: c.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group text-center">
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block mb-1 btnshadow"
              onClick={this.saveUserDetails}
            >
              Register
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
