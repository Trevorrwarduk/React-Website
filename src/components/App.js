var React = require("react");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var BrowserHistory = ReactRouter.BrowserHistory;

var HeadingSection = require("./HeadingSection");
var Home = require("./Home");
var Projects = require("./Projects");
var Me = require("./Me");
var Blog = require("./Blog");
var NotFound = require("./NotFound");
var SocialBar = require("./SocialBar");
// var RunningBlog = require("./RunningBlog");

class App extends React.Component {
  render() {
    return (
      <Router history={BrowserHistory}>
        <div>
          <div className="spacer40"> </div>

          <div className="container whiteBack">
            <div className="row headingArea">
              <HeadingSection />
            </div>
            <div className="row bottomArea">
              <div className="col-sm-1" />
              <div className="col-sm-10 contentArea">
                <Switch>
                  <Route exact={true} path="/" component={Home} />
                  <Route exact={true} path="/projects" component={Projects} />
                  <Route exact={true} path="/me" component={Me} />
                  <Route exact={true} path="/blog" component={Blog} />
                  {/* <Route exact={true} path='/runningblog' component={RunningBlog} /> */}
                  <Route path="/*" component={NotFound} status={404} />
                </Switch>
              </div>
              <div className="col-sm-1" />
            </div>
          </div>
          <footer className="footerBar">
            <SocialBar />
          </footer>
          <div className="spacer40" />
        </div>
      </Router>
    );
  }
}

module.exports = App;
