import React, { Component, Fragment } from "react";
import axios from "axios";
import "../styles/styles.css";

export default class AdminMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selParentNode: "0",
      txtmenuName: "",
      msgRes: "",
      showBox: false,
      loadModulesData: [],
      selModuleName: '',
      txtSubModuleName: '',
      menuFlag:'menu'
    };
  }
  //Load Modules
  componentDidMount() {
   this.loadModulesForm();
  }
  loadModulesForm = () => {
    axios
    .get("http://localhost:9000/load-parent-nodes", {})
    .then(res => {
      //on success
      console.log("Success dtaa", res);
      this.setState({ loadModulesData: res.data.menu });
    })
    .catch(error => {
      //on error
      console.log("Fail", error);
    });
  }
  // Save Menu details
  saveModules = () => {
    //http://localhost:9000/create-module    
    const jso = {
        parentNode: "0",
        menuName: this.state.txtmenuName
      }
    axios
      .post("http://localhost:9000/create-module", jso)
      .then(res => {
        console.log("Module Response", res);
        this.setState({ msgRes: res.data.message, showBox: true, txtmenuName: '' , selModuleName:''});
        this.loadModulesForm();
      })
      .catch(err => {
        throw err;
      });
  };
  saveSubModules = () => {
    //http://localhost:9000/create-module    
    const jso = {
        parentNode: this.state.selModuleName,
        menuName: this.state.txtSubModuleName
      }
    axios
      .post("http://localhost:9000/create-module", jso)
      .then(res => {
        console.log("Module Response", res);
        this.setState({ msgRes: res.data.message, showBox: true, txtSubModuleName:'', selModuleName:'0' });
        
      })
      .catch(err => {
        throw err;
      });
  };
  onChangeSubMenu = (e) => {
    console.log(e,'asdasdas')
  }
  render() {
    console.log(this.state.selModuleName);
    return (
      <Fragment>
        <p>Add Module</p>
        <div className="modal-body">
          {this.state.showBox ? (
            <div className="alert alert-danger" role="alert">
              {this.state.msgRes}
            </div>
          ) : (
            <div />
          )}
          <div className="row">
            <div className="col-sm-3">
              <label>Select Node</label>
            </div>
            <div className="col-sm-3">
              <select
                className="form-control"
                onChange={e => this.setState({ packageType: e.target.value })}
                disabled
              >
                <option value="0">Parent</option>
              </select>
            </div>
          </div>{" "}
          &nbsp;
          <div className="row">
            <div className="col-sm-3">
              <label>Module Name</label>
            </div>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Module Name"
                value={this.state.txtmenuName}
                onChange={e => this.setState({ txtmenuName: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group text-center col-sm-3">
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block mb-1 btnshadow"
              onClick={this.saveModules}
            >
              Add Module
            </button>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;
        <p>Add Sub Modules</p>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-3">
              <label>Select Module</label>
            </div>
            <div className="col-sm-3">
              <select className="form-control" value={this.state.selModuleName} onChange={(e) => this.setState({ selModuleName: e.target.value, menuFlag: 'submenu'})}>
                <option value="0">Select Parent</option>
                {this.state.loadModulesData.map((itm, i) => (
                  <option value={itm._id}>{itm.menuName}</option>
                ))}
              </select>
            </div>
          </div> &nbsp;
          <div className="row">
            <div className="col-sm-3">
              <label>Sub Module Name</label>
            </div>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Module Name"
                value={this.state.txtSubModuleName}
                onChange={s => this.setState({ txtSubModuleName: s.target.value })}
              />
            </div>
          </div>
          <div className="form-group text-center col-sm-3">
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block mb-1 btnshadow"
              onClick={this.saveSubModules}
            >
              Add Sub Module
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
