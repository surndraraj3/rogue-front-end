import React, { Component } from 'react';
import '../styles/styles.css';
import logo from '../../assets/logo.png';

export default class ModulesView extends Component {
    render() {
        return (
            <div>
                <div class="row no-gutters">
                    <div class="col-6 col-md-2"><img src={logo} className="App-logo" alt="logo" /></div>
                    <div class="col-12 col-sm-6 col-md-10 headerbg"></div>
                </div>
                <div className="col-sm-12 navbg"></div>
                <div className="container">

                    <div className="col-lg-12 modulesbg">
                        <div class="container">
                            <div class="row contentpdng offset-md-4">
                                <div className="col-sm-6 moduleslist">
                                    <h3>Modules List</h3>     
                                    <ul>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" />  Organisation</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Comissions</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Events</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Orders</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Resources</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Store</li>
                                        <li><input type="checkbox" name="vehicle1" value="Bike" /> Company News</li>
                                    </ul>
                                    <div className="savebtn col-md-6"><button type="submit" class="btn btn-primary btn-sm btn-block">Save</button></div>
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