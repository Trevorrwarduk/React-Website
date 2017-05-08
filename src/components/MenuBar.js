var React                 = require('react');
var NavLink               = require('react-router-dom').NavLink;

var MenuItem            = require('./MenuItem');

class MenuBar extends React.Component {
  render() {
    return (
      <div className="menuBar">
        <NavLink className="floatLeft" exact to='/'>
          <MenuItem
            image='home.png'
            title="Home"
            altText='Home Menu'/>
        </NavLink>
        <NavLink className="floatLeft" exact to='/projects'>
          <MenuItem
            image='projects.png'
            title="Projects"
            altText='Projects Menu'/>
        </NavLink>
        <NavLink className="floatLeft" exact to='/me'>
          <MenuItem
            image='me.png'
            title="Me"
            altText='Me Menu'/>
        </NavLink>
        <NavLink className="floatLeft" exact to='/blog'>
          <MenuItem
            image='blog.png'
            title="Blog"
            altText='Blog Menu'/>
        </NavLink>
      </div>
    )
  }
}

module.exports = MenuBar;
