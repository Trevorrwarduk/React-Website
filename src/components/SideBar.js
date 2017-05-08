var React                 = require('react');

class SideBar extends React.Component {
  render () {
    return (
      <div>
        <img
          className="sideBarImage roundCorner"
          src="/assets/sideBar/oyf17.jpeg"
          alt="On Your Feet 2017" />
        <hr className="sideBarSeperator"/>
        <img
          className="sideBarImage roundCorner"
          src="/assets/sideBar/atom.jpg"
          alt="Atom Editor" />
        <hr className="sideBarSeperator"/>
        <img
          className="sideBarImage roundCorner"
          src="/assets/sideBar/desktop.jpg"
          alt="My Standing Desk" />
      </div>
    )
  }
}

module.exports = SideBar;
