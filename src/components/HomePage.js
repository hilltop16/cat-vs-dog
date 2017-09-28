var React = require('react')
var PetComponent = require('./PetComponent')

var style = {
  textAlign: 'center',
  fontSize: '3em',
  color: 'rebeccapurple'
}
var contentStyle = {
  textAlign: 'center',
  color: 'pink'
}

var btnStyle = {
  height: '25px',
  width: '75px',
}

const catImgUrl = "http://thecatapi.com/api/images/get";
const dogImgUrl = "http://dog.ceo/api/breeds/image/random";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowWinner = this.handleShowWinner.bind(this);
    this.handleStartOver = this.handleStartOver.bind(this);
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.state = {
      catLikesCount: 0,
      dogLikesCount: 0,
      catResult: '',
      dogResult: '',
      catImg: '',
      dogImg: ''
    }
  }
  componentDidMount() {
    this.fetchCatImg()
    this.fetchDogImg()
  }
  handleShowWinner() {
    if (this.state.catLikesCount > this.state.dogLikesCount) {
      this.setState({
        catResult: 'Winner',
        dogResult: 'Loser'
      })
    } else if (this.state.catLikesCount < this.state.dogLikesCount) {
      this.setState({
        catResult: 'Loser',
        dogResult: 'Winner'
      })
    } else {
      this.setState({
        catResult: 'Tie',
        dogResult: 'Tie'
      })
    }

  }
  handleStartOver() {
    this.setState({
      catLikesCount: 0,
      dogLikesCount: 0,
      catResult: '',
      dogResult: ''
    })
  }
  fetchCatImg() {
    this.setState({
      catImg: catImgUrl
    })
  }
  fetchDogImg() {
    fetch(dogImgUrl)
    .then(res => res.json())
    .then(data => {
      var imgUrl = data.message;
      this.setState({
      dogImg: imgUrl
      })
    })
  }

  handleLikeBtnClick(event) {
    console.log(event.target)
    var petName = event.target.value;
    if (petName === 'cat') {
      this.setState(prevState => {
        return {
          catLikesCount: prevState.catLikesCount + 1,
          dogLikesCount: prevState.dogLikesCount,
        }
      })
    } else {
      this.setState(prevState => {
        return {
          catLikesCount: prevState.catLikesCount,
          dogLikesCount: prevState.dogLikesCount + 1,
        }
      })
    }
    this.fetchCatImg();
    this.fetchDogImg();
  }

  handleDislikeBtnClick(event) {
    console.log(event.target)
    var petName = event.target.value;
    if (petName === 'cat') {
      this.setState(prevState => {
        return {
          catLikesCount: prevState.catLikesCount -1,
          dogLikesCount: prevState.dogLikesCount,
        }
      })
    } else {
      this.setState(prevState => {
        return {
          catLikesCount: prevState.catLikesCount,
          dogLikesCount: prevState.dogLikesCount - 1,
        }
      })
    }
  }



  render() {
    return (
      <div>
        <h3 style={style}>Welcome to Cat vs Dog</h3>
        <div style={contentStyle}>
          <PetComponent
            petName='cat'
            likesCount={this.state.catLikesCount}
            result={this.state.catResult}
            ImgSrc={this.state.catImg}
            onLikeBtn={this.handleLikeBtnClick}
            onDislikeBtn={this.handleDislikeBtnClick}
          />
          <PetComponent
            petName='dog'
            likesCount={this.state.dogLikesCount}
            result={this.state.dogResult}
            ImgSrc={this.state.dogImg}
            onLikeBtn={this.handleLikeBtnClick}
            onDislikeBtn={this.handleDislikeBtnClick}
          />
        </div>
        <div style={{textAlign: 'center'}}>
          {!this.state.dogResult &&
            <button style={btnStyle} onClick={this.handleShowWinner} >Winner</button>}
          <button style={btnStyle} onClick={this.handleStartOver} >Start Over</button>
        </div>
      </div>
    )
  }
}

module.exports = HomePage;
