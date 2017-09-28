var React = require('react');

const PetComponent = function(props) {
  var disabled = '';
  if (props.result) {
    disabled = true;
  } else {
    disabled = false;
  }
  return (
    <div style={compStyle}>
      <p>{props.result}</p>
      <p>{props.petName}: {props.likesCount}</p>
      <img style={{height: 300, width: 300}} src={props.ImgSrc} alt={props.petName + 'img'} />
      <br />
      <button style={btnStyle}
        disabled={disabled}
        value={props.petName}
        onClick={props.onLikeBtn}>Like</button>
      <button style={btnStyle}
        disabled={disabled}
        value={props.petName}
        onClick={props.onDislikeBtn}>Dislike</button>
    </div>
  )
}

var compStyle = {
  display: 'inline-block'
}

var btnStyle = {
  height: '25px',
  width: '75px'
}

module.exports = PetComponent;
