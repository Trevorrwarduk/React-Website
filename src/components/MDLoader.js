var React                 = require('react');
var Marked                = require('marked');
var PropTypes             = require('prop-types');

var ReactMarkDown         = require('react-markdown');

class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      markdown:     null,
      errorHandler: null
    };
    this.setupMarkdown = this.setupMarkdown.bind(this);
  }
  componentWillReceiveProps(props) {
      this.setupMarkdown(props)
  }
  componentWillMount() {
      this.setupMarkdown(this.props)
  }
  setupMarkdown(props) {
    fetch(props.file)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: Marked(text)
        })
      })
      .catch((ex) => {
        this.setState({
          errorHandler:     true,
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
        {!this.state.errorHandler
          ? ""
          : <div>
              <h1>Something went wrong</h1>
            </div>
        }
      </div>
    )
  }
}
Home.propTypes = {
  file:        PropTypes.string.isRequired
}

module.exports = Home;
