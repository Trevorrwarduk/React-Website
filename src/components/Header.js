var React = require("react");

class Header extends React.Component {
  render() {
    return (
      <div className="headerBar floatRight">
        <div>
          <span className="headingColor headFontLarge">Trevor R Ward </span>
          <span className="headingColor headFontMedium">UK.ME</span>
        </div>
      </div>
    );
  }
}

module.exports = Header;
