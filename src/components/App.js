var React                 = require('react');
var ReactRouter           = require('react-router-dom');
var Router                = ReactRouter.BrowserRouter;
var Route                 = ReactRouter.Route;
var Switch                = ReactRouter.Switch;
var BrowserHistory        = ReactRouter.BrowserHistory;

var HeadingSection        = require('./HeadingSection');
var Home                  = require('./Home');
var Projects              = require('./Projects');
var Me                    = require('./Me');
var Blog                  = require('./Blog');
var NotFound              = require('./NotFound');

class App extends React.Component {
  render() {
    return (
      <Router history={BrowserHistory}>
        <div className="container greenBack">
          <div className="row headingArea">
            <HeadingSection />
          </div>
          <div className="row bottomArea">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 contentArea">
              <Switch>
                <Route exact={true} path='/'          component={Home} />
                <Route exact={true} path='/projects'  component={Projects} />
                <Route exact={true} path='/me'        component={Me} />
                <Route path='/blog'                   component={Blog} />
                <Route path="/*"                      component={NotFound} status={404} />
              </Switch>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </Router>
    );
  }
}

module.exports = App;
