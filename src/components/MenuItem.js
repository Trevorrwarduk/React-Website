var React                 = require('react');
var PropTypes             = require('prop-types');

class MenuItem extends React.Component {
  render () {
    var menuIcon = "/assets/menuIcons/" + this.props.image;

    return (
      <div className="menuItem">
        <img className="icon" src={menuIcon} alt={this.props.altText}/>
        <div className="iconText greenColor">{this.props.title}</div>
      </div>
    )
  }
}

MenuItem.propTypes = {
  image:    PropTypes.string.isRequired,
  altText:  PropTypes.string.isRequired,
  title:    PropTypes.string.isRequired
}

module.exports = MenuItem;
