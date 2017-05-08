var React                 = require('react');
var MDLoader              = require('./MDLoader');

class Projects extends React.Component {
  render () {
    return (
      <div>
        <MDLoader file="content/projects.md" />
      </div>
    )
  }
}

module.exports = Projects;
