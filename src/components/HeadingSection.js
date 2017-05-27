var React                 = require('react');

var Header                = require('./Header');
var MenuBar               = require('./MenuBar');
var StrapLine             = require('./StrapLine');

class HeadingSection extends React.Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6"><MenuBar /></div>
          <div className="col-sm-6"><Header /></div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <hr className="seperatorLine"/>
            <StrapLine />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = HeadingSection;
