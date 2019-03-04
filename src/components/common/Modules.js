import React, { Component } from "react";
import "../styles/styles.css";
import logo from "../../assets/logo.png";
import Checkbox from "../formtypes/Checkbox";

const items = [
  "Organisation",
  "Comissions",
  "Events",
  "Orders",
  "Resources",
  "Store",
  "Company News"
];

export default class ModulesView extends Component {
  state = {
    msgModules: false,
    msgChkbox: false,
    menuList: null
  };
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
    const userMenu = localStorage.getItem('UserDetails');
    if (userMenu) {
      this.setState({ menuList: JSON.parse(userMenu) });
      return;
    }
  };

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let arrModules = [];
    console.log("checkbox", this.selectedCheckboxes.has());
    //if(this.selectedCheckboxes.has()) {
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, "is selected.");
      arrModules.push(checkbox);
    }
    //
    localStorage.setItem("ModulesList", JSON.stringify(arrModules));
    this.setState({ msgModules: true });
    // } else{
    //     this.setState({ msgChkbox: true});
    // }
  };

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => this.state.menuList.map(this.createCheckbox);
  render() {
    console.log('menuList', this.state.menuList);
    return (
      <div>
        <div className="row no-gutters">
          <div className="col-6 col-md-2">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-12 col-sm-6 col-md-10 headerbg" />
        </div>
        <div className="col-sm-12 navbg" />
        <div className="container">
          <div className="col-lg-12 modulesbg">
            <div className="container">
              <div className="row contentpdng offset-md-4">
                <div className="col-sm-6 moduleslist">
                  <h3>Modules List</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        {this.createCheckboxes()}
                        {/* <button className="btn btn-default" type="submit">Save</button> */}
                        <div className="savebtn col-md-6">
                          <button
                            type="submit"
                            className="btn btn-primary btn-sm btn-block"
                            onClick={this.handleFormSubmit}
                          >
                            Save
                          </button>
                        </div>
                        <br />
                        <br />
                        &nbsp;
                        {this.state.msgModules ? (
                          <div className="row">
                            <div
                              className="col-sm-12 alert alert-danger"
                              role="alert"
                            >
                              Access denied due to the lack of roles and permission by the
                              current user to access the plugin
                            </div>
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <ul>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" />  Organisation</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Comissions</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Events</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Orders</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Resources</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Store</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Company News</li>
                                    </ul>
                                    <div className="savebtn col-md-6"><button type="submit" className="btn btn-primary btn-sm btn-block">Save</button></div> */}
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
      </div>
    );
  }
}
