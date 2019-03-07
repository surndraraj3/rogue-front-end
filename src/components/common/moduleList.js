import React, { Component, Fragment } from "react";
import "../styles/styles.css";
import axios from "axios";

export default class ModulesList extends Component {
  state = {
    listOfMenus: [],
    listOfChildMenus: []
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

    axios
      .get("http://localhost:9000/load-sub-menu", {})
      .then(resSubMenu => {
        console.log("Sub Menu", resSubMenu);
        this.setState({ listOfChildMenus: resSubMenu.data.submenu });
      })
      .catch(errSubMenu => {
        throw errSubMenu;
      });
  }

  groupingMenu = () => {
    let groupJson = [];
    this.state.listOfMenus.map(dt => {
      let child = [];
      this.state.listOfChildMenus.map(d => {
        if (d.parentNode === dt._id) {
          child.push({ name: d.menuName });
        }
      });
      //   console.log("Child", child);
      groupJson.push({ Menu: dt.menuName, childA: child });
    });
    // console.log("Group Data", groupJson);
    return groupJson.map(d => (
      <div>
        <ul className="mod-list">
          <i className="fa fa-check blue-check" />
          {d.Menu}
          {d.childA.map(ds => (
            <ul className="mod-list">
              <li>
                <i className="fa fa-check blue-check" />
                {ds.name}
              </li>
            </ul>
          ))}
        </ul>
      </div>
    ));
  };

  render() {
    //console.log('Render', this.state.finalJson)
    return (
      <Fragment>       
        {this.groupingMenu()}
      </Fragment>
    );
  }
}
