var React = require('react');

class DogComponent extends React.Component {
  handleBtnClick() {
    console.log(this)
  }
  render() {
    return (
      <div style={compStyle}>
        <p>Dog</p>
        <img style={{height: 400, width: 400}} src='http://www.pawderosa.com/images/puppies.jpg' alt='dog img' />
        <br />
        <button style={btnStyle} onClick={this.handleBtnClick.bind(this)}>Like</button>
        <button style={btnStyle}>Dislike</button>
      </div>
    )
  }
}

var compStyle = {
  display: 'inline-block',
}

var btnStyle = {
  height: '25px',
  width: '75px'
}

module.exports = DogComponent;
