var React                 = require('react');
var ReactDOM              = require('react-dom');
var App                   = require('../components/App');


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
