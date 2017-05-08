var React                 = require('react');
var Marked                = require('marked');
var PropTypes             = require('prop-types');

var ReactMarkDown         = require('react-markdown');

class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      markdown: null
    };
  }
  componentWillMount() {
    fetch(this.props.file)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: Marked(text)
        })
      })
  }
  render () {
    return (
      <div>
        {!this.state.markdown
          ? "LOADING"
          : <ReactMarkDown source={this.state.markdown} />
        }
      </div>
    )
  }
}
Home.propTypes = {
  file:    PropTypes.string.isRequired
}

module.exports = Home;
