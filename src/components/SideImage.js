var React                 = require("react");
var PropTypes             = require('prop-types');

class sideImage extends React.Component {
  render () {
    return (
      <div>
        <img
          className="sideBarImage roundCorner"
          src={this.props.image}
          alt={this.props.altText} />
        <hr className="sideBarSeperator"/>
      </div>
    )
  }
}
sideImage.propTypes = {
  image:    PropTypes.string.isRequired,
  altText:  PropTypes.string.isRequired,
}

module.exports = sideImage;
