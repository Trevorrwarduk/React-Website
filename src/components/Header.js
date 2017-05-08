var React                 = require('react');

class Header extends React.Component {
  render() {
    return (
      <div className="headerBar">
        <div>
          <span className="orangeColor headFontLarge">Trevor R Ward </span>
          <span className="orangeColor headFontMedium">UK .ME</span>
        </div>
      </div>
    )
  }

}

module.exports = Header;
