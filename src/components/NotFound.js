var React                 = require('react');

class NotFound extends React.Component {
  render () {
    return (
      <div>
        <h1 className="centerText">Nobody here but us Ducks</h1>
        <div className="centerText">
          <img src="/assets/menuIcons/duck.png" alt="No Duck Here" />
        </div>
      </div>
    )
  }
}

module.exports = NotFound;
