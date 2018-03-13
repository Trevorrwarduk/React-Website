var React = require("react");
var NavLink = require("react-router-dom").NavLink;

var MenuItem = require("./MenuItem");

class MenuBar extends React.Component {
  render() {
    return (
      <div className="menuBar floatLeft">
        <NavLink className="floatLeft" exact to="/">
          <MenuItem image="home2.png" title="Home" altText="Home Menu" />
        </NavLink>
        <NavLink className="floatLeft" exact to="/projects">
          <MenuItem
            image="projects2.png"
            title="Projects"
            altText="Projects Menu"
          />
        </NavLink>
        <NavLink className="floatLeft" exact to="/me">
          <MenuItem image="me2.png" title="Me" altText="Me Menu" />
        </NavLink>
        <NavLink className="floatLeft" exact to="/blog">
          <MenuItem image="blog2.png" title="Blog" altText="Blog Menu" />
        </NavLink>
        {/* <NavLink className="floatLeft" exact to="/runningblog">
          <MenuItem
            image="rblog.png"
            title="Run Blog"
            altText="Running Blog Menu"
          />
        </NavLink> */}
      </div>
    );
  }
}

module.exports = MenuBar;
