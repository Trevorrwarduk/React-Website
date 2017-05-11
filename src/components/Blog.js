var React                 = require('react');
var MDLoader              = require('./MDLoader');

/*
This blog is controlled by a JSON file in the public blo directory blogs.JSON.

This file is loaded and the details rendered to enable the selection and searching
of the blog posts.

To add a new blog post, create the mardown file, place it into the public/blog
directory and update the blogs.json file with the information.


*/
class Blog extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      blogPosts: null,
      blogCategories: null,
      showBlog: null,
      dateWritten: null,
      author: null,
      errorHandler: null
    };

    this.setupBlogData = this.setupBlogData.bind(this);
    this.reloadBogPost = this.reloadBogPost.bind(this);

  }
  setupBlogData(data) {
    // Format the categories into the select item

    // Format the blogs into the select item
    this.setState({
      blogCategories: data.categories,
      blogPosts:      data.posts,
      dateWritten:    data.posts[0].date,
      author:         data.posts[0].author,
      showBlog:       "blog/" + data.posts[0].file
    })
  }
  reloadBogPost(e) {
    this.setState({
      showBlog:     "blog/" + this.state.blogPosts[e.target.selectedIndex].file,
      dateWritten:  this.state.blogPosts[e.target.selectedIndex].date,
      author:       this.state.blogPosts[e.target.selectedIndex].author
    })
  }
  componentWillMount() {
    fetch('blog/blogs.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setupBlogData(json);
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
          {!this.state.blogData
            ? ""
            : this.setupBlogData()
          }

          {!this.state.blogCategories
            ? "Loading"
            :
              <div>
                <hr className="seperatorLine"/>
                  <div className="blogSelectionBar">
                    <label>The Blog Posts</label>
                    <select className="blogSelect" onChange={this.reloadBogPost}>
                      {this.state.blogPosts.map(function(post) {
                        return <option key={post.file} value={post.file}>{post.title} ~ {post.date}</option>
                      })}
                    </select>
                  </div>
              </div>
          }
          {!this.state.showBlog
            ? ""
            : <div>
                <div className="blogInfoBar">
                  <span className="blogInfoAuthor">{this.state.author}</span>
                  <span className="blogInfoDate">{this.state.dateWritten}</span>
                </div>
                <div id="contentDisplay">
                  <MDLoader file={this.state.showBlog} />
                </div>
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

module.exports = Blog;
