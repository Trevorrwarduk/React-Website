var React                 = require('react');
var PropTypes             = require('prop-types');

class SocialItem extends React.Component {
  render () {
    var menuIcon = "/assets/menuIcons/" + this.props.image;

    return (
      <div className="socialItem">
        <img className="socialIcon blueBack circleRadius"
             src={menuIcon}
             alt={this.props.altText}/>
        <div className="socialText DGreenColor">{this.props.title}</div>
      </div>
    )
  }
}

SocialItem.propTypes = {
  image:    PropTypes.string.isRequired,
  altText:  PropTypes.string.isRequired,
  title:    PropTypes.string.isRequired
}

module.exports = SocialItem;
