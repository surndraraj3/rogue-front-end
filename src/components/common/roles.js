import React, { Component, Fragment } from "react";
import axios from "axios";

export default class Roles extends Component {
  state = {
    selModName: "",
    listOfMenus: [],
    chkArr: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:9000/load-parent-nodes", {})
      .then(getParentNodes => {
        console.log("Get Parent Nodes", getParentNodes);
        this.setState({ listOfMenus: getParentNodes.data.menu });
      })
      .catch(errParentNodes => {
        throw errParentNodes;
      });
  }
  loadCheckbox = () => {
    return this.state.listOfMenus.map(d => (
      <div>
        <input
          type="checkbox"
          value={d._id}
          onChange={e => this.handleChange(e)}
        />
        &nbsp; {d.menuName} &nbsp;
      </div>
    ));
  };
  handleChange = e => {
    console.log("Check", e.target.value);
    this.state.chkArr.push(e.target.value);
  };
  saveRoles = () => {
    console.log("Roles", this.state.chkArr, "mode", this.state.selModName);
    let rolesCat = [];
    axios
      .post("http://localhost:9000/create-role", {
        modules: this.state.chkArr,
        roleName: this.state.selModName
      })
      .then(r => console.log("r", r))
      .catch(e => {
        throw e;
      });

      axios
      .get("http://localhost:9000/load-role-byid/guest", {})
      .then(getParentNodes => {
        console.log("Get Parent Nodes", getParentNodes);
        rolesCat.push(getParentNodes.data.submenu)

        getParentNodes.data.submenu.map(d => {
            console.log('dasdadas', d.modules)
            d.modules.map(a => {
                console.log('asdadsdas', a)
                axios
                .get(`http://localhost:9000/load-child-nodes/${a}`, {})
                .then(t => {
                    console.log('Data Output', t)
                })
                .catch(e => { throw e;})
            })
        })
      })
      .catch(errParentNodes => {
        throw errParentNodes;
      });
      console.log('Menu', rolesCat);

      
  };
  render() {
    console.log("SelMode Check", this.state.chkArr);
    return (
      <Fragment>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-3">
              <label>Role Name</label>
            </div>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Role Name"
                value={this.state.selModName}
                onChange={e => this.setState({ selModName: e.target.value })}
              />
            </div>
          </div>
          &nbsp;
          <div className="row">
            <div className="col-sm-3">
              <label>Select Module</label>
            </div>
            {this.loadCheckbox()}
          </div>
          <div className="form-group text-center col-sm-3">
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block mb-1 btnshadow"
              onClick={this.saveRoles}
            >
              Save Roles
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
