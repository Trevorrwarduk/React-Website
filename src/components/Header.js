var React                 = require('react');

class Header extends React.Component {
  render() {
    return (
      <div className="headerBar floatRight">
        <div>
          <span className="whiteColor headFontLarge">Trevor R Ward </span>
          <span className="whiteColor headFontMedium">UK.ME</span>
        </div>
      </div>
    )
  }

}

module.exports = Header;
