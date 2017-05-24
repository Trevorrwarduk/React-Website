var React                 = require('react');
var MDLoader              = require('./MDLoader');

/*
This blog is controlled by a JSON file in the public blo directory blogs.JSON.

This file is loaded and the details rendered to enable the selection and searching
of the blog posts.

To add a new blog post, create the mardown file, place it into the public/blog
directory and update the blogs.json file with the information.


*/
const fileLocation = '/blog/';

class Blog extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      blogPosts: null,
      selectedPosts: null,
      selectedItem: null,
      blogCategories: null,
      showBlog: null,
      dateWritten: null,
      author: null,
      errorHandler: null,
      update: null,
    };

    this.setupBlogData      = this.setupBlogData.bind(this);
    this.reloadBlogPost     = this.reloadBlogPost.bind(this);
    this.loadCategoryPosts  = this.loadCategoryPosts.bind(this);
    this.fetchData          = this.fetchData.bind(this);

    this.fetchData();
  }
  setupBlogData(data) {
    this.setState({
      blogCategories: data.categories,
      blogPosts:      data.posts,
      selectedPosts:  data.posts,
      dateWritten:    data.posts[0].date,
      author:         data.posts[0].author,
      showBlog:       fileLocation + data.posts[0].file,
      selectedItem:   data.posts[0].file,
      update:         true
    })
  }
  reloadBlogPost(e) {
    this.setState({
      showBlog:     fileLocation + this.state.selectedPosts[e.target.selectedIndex].file,
      dateWritten:  this.state.selectedPosts[e.target.selectedIndex].date,
      author:       this.state.selectedPosts[e.target.selectedIndex].author,
      selectedItem: this.state.selectedPosts[e.target.selectedIndex].file
    })
  }
  loadCategoryPosts(e) {
    this.setState({
      selectedPosts: null,
      selectedItem:  null,
      showBlog:      null,
      dateWritten:   null,
      author:        null
    })

    let firstBlogarray = [];

    if (e.target.value === 'All') {
       firstBlogarray.push(this.state.blogPosts);
       firstBlogarray.push(fileLocation + this.state.blogPosts[0].file);
       firstBlogarray.push(this.state.blogPosts[0].file);
       firstBlogarray.push(this.state.blogPosts[0].date);
       firstBlogarray.push(this.state.blogPosts[0].author);
    } else {
      let catItems = this.state.blogCategories[e.target.selectedIndex].posts;
      let postItems = [];

      catItems.map((item) => {
        return postItems.push(this.state.blogPosts[item])
      })
      firstBlogarray.push(postItems);
      firstBlogarray.push(fileLocation + postItems[0].file);
      firstBlogarray.push(postItems[0].file);
      firstBlogarray.push(postItems[0].date);
      firstBlogarray.push(postItems[0].author);
    }

    this.setState({
      selectedPosts: firstBlogarray[0],
      showBlog:      firstBlogarray[1],
      selectedItem:  firstBlogarray[2],
      dateWritten:   firstBlogarray[3],
      author:        firstBlogarray[4]
    })
  }
  fetchData() {
    let jsonFile = fileLocation + 'blogs.json';

    fetch(jsonFile)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setupBlogData(json);
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
          {!this.state.blogCategories
            ? ""
            :
              <div>
                <div className="blogSelectionBar">
                  <label>Sort by Category</label>
                  <select className="blogSelect" onChange={this.loadCategoryPosts}>
                    {this.state.blogCategories.map(function(category) {
                        return (
                          <option key={category.title} value={category.title}>{category.title} ~ ( {category.posts.length} )</option>
                        )
                    })}
                  </select>
                </div>
              </div>
          }
          {!this.state.selectedPosts
            ? ""
            :
              <div>
                  <div className="blogSelectionBar">
                    <label>The Blog Posts</label>
                    <select className="blogSelect" value={this.state.selectedItem} onChange={this.reloadBlogPost}>
                      {this.state.selectedPosts.map(function(post) {
                        return (
                          <option key={post.file} value={post.file}>{post.title} ~ {post.date}</option>
                        )
                      })}
                    </select>
                  </div>
                  <hr className="seperatorLine"/>
              </div>
          }
          {!this.state.showBlog
            ? "LOADING"
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
