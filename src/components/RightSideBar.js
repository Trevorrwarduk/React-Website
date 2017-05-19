var React                 = require('react');

var SideImage             = require('./SideImage');

class SideBar extends React.Component {
  render () {
    return (
      <div>
        <a href="http://amzn.to/2qFkcdy" target="_blank">
          <SideImage image="/assets/sideBar/atom.jpg"
            altText="Atom Editor" />
        </a>
        <a href="http://onyourfeetday.com/" target="_blank">
          <SideImage image="/assets/sideBar/oyf17.jpeg"
            altText="On Your Feet 2017"/>
        </a>
        <SideImage image="/assets/sideBar/desktop.jpg"
          altText="My Standing Desk" />
      </div>
    )
  }
}

module.exports = SideBar;
