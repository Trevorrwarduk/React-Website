var React                 = require('react');
var ReactDOM              = require('react-dom');
var ShallowRender         = require('enzyme').shallow

const Blog                = require('../components/Blog');

describe('Testing the Blog Code', function () {

  beforeEach(function() {

  });

  afterEach(function() {

  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ShallowRender(<Blog />, div);
  });
  // it('checks the function setupBlogData exists', () => {
  //   expect(Blog.setupBlogData).not.toBe(undefined);
  // });

})
