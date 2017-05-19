var React                 = require('react');

class Header extends React.Component {
  render() {
    return (
      <div className="headerBar">
        <div>
          <span className="blueColor headFontLarge">Trevor R Ward </span>
          <span className="blueColor headFontMedium">UK.ME</span>
        </div>
      </div>
    )
  }

}

module.exports = Header;
