var React                 = require('react');

var SocialItem            = require('./SocialItem');

class SocialBar extends React.Component {
  render () {
    return (
      <div className="centered">
          <a className="floatLeft"
             href="https://www.instagram.com/trevorrwarduk/"
             target="_blank" rel="noopener noreferrer">
            <SocialItem
              image='instagram.png'
              title="Instagram"
              altText='Instagram Social'/>
          </a>
          <a className="floatLeft"
             href="https://twitter.com/trevorrwarduk"
             target="_blank" rel="noopener noreferrer">
            <SocialItem
              image='twitter.png'
              title="Twitter"
              altText='Twitter Social'/>
          </a>
          <a className="floatLeft"
             href="https://www.linkedin.com/in/trevorrwarduk/"
             target="_blank" rel="noopener noreferrer">
            <SocialItem
              image='linkedin.png'
              title="LinkedIn"
              altText='LinkedIn Social'/>
          </a>
          <a className="floatLeft"
             href="https://www.facebook.com/TrevorRWardUK"
             target="_blank" rel="noopener noreferrer">
            <SocialItem
              image='facebook.png'
              title="Facebook"
              altText='Facebook Social'/>
          </a>
          <a className="floatLeft"
             href="https://github.com/Trevorrwarduk"
             target="_blank" rel="noopener noreferrer">
            <SocialItem
              image='github.png'
              title="Github"
              altText='Github Social'/>
          </a>
      </div>
    )
  }
}

module.exports = SocialBar;
