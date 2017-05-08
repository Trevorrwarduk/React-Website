var React                 = require('react');

var MDLoader              = require('./MDLoader');

class Home extends React.Component {
    render () {
      return (
        <div>
          <MDLoader file="blog/blog001.md" />
        </div>
      )
    }
}

module.exports = Home;
