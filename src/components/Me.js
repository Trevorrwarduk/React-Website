var React                 = require('react');
var MDLoader              = require('./MDLoader');

class Me extends React.Component {
  render () {
    return (
      <div>
        <MDLoader file="content/me.md"/>
      </div>
    )
  }
}

module.exports = Me;
