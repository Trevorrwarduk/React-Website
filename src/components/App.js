var React                 = require('react');
var ReactRouter           = require('react-router-dom');
var Router                = ReactRouter.BrowserRouter;
var Route                 = ReactRouter.Route;
var Switch                = ReactRouter.Switch;

var HeadingSection        = require('./HeadingSection');
var SideBar               = require('./SideBar');
var Home                  = require('./Home');
var Projects              = require('./Projects');
var Me                    = require('./Me');
var Blog                  = require('./Blog');
var NotFound              = require('./NotFound');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container greenBack">
          <div className="row headingArea">
            <HeadingSection />
          </div>
          <div className="row bottomArea">
            <div className="col-sm-2 sideBar">
              <SideBar />
            </div>
            <div className="col-sm-10 contentArea">
              <Switch>
                <Route exact path='/'     component={Home} />
                <Route path='/projects'   component={Projects} />
                <Route path='/me'         component={Me} />
                <Route path='/blog'       component={Blog} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

module.exports = App;
