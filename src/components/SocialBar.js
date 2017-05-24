var React                 = require('react');

var MenuItem              = require('./MenuItem');

class SocialBar extends React.Component {
  render () {
    return (
      <div className="socialBar">
        <a className="floatLeft"
           href="https://twitter.com/trevorrwarduk"
           target="_blank" rel="noopener noreferrer">
          <MenuItem
            image='twitter.png'
            title="Twitter"
            altText='Twitter Social'/>
        </a>
        <a className="floatLeft"
           href="https://www.linkedin.com/in/trevorrwarduk/"
           target="_blank" rel="noopener noreferrer">
          <MenuItem
            image='linkedin.png'
            title="LinkedIn"
            altText='LinkedIn Social'/>
        </a>
        <a className="floatLeft"
           href="https://www.facebook.com/TrevorRWardUK"
           target="_blank" rel="noopener noreferrer">
          <MenuItem
            image='facebook.png'
            title="Facebook"
            altText='Facebook Social'/>
        </a>
        <a className="floatLeft"
           href="https://github.com/Trevorrwarduk"
           target="_blank" rel="noopener noreferrer">
          <MenuItem
            image='github.png'
            title="Github"
            altText='Github Social'/>
        </a>
      </div>
    )
  }
}

module.exports = SocialBar;
