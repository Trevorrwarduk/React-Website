var React                 = require('react');

var MDLoader              = require('./MDLoader');

class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showBlog: null,
      errorHandler: null
    };
    this.setupFirstBlog = this.setupFirstBlog.bind(this);
  }
  setupFirstBlog(data) {
    this.setState({
      showBlog:       "blog/" + data.posts[0].file
    })
  }
  componentWillMount() {
    fetch('blog/blogs.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setupFirstBlog(json);
      })
      .catch((ex) => {
        console.log('ERROR');
        this.setState({
          errorHandler:     true,
        })
      })
  }
  render () {
    return (
      <div>
      {!this.state.showBlog
        ? "LOADING"
        : <div>
            <MDLoader file={this.state.showBlog} />
          </div>
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

module.exports = Home;
