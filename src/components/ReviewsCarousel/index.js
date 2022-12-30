import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {position: 0}

  leftArrowButton = () => {
    const {position} = this.state
    if (position > 0) {
      this.setState(prevCount => ({
        position: prevCount.position - 1,
      }))
    }
  }

  rightArrowButton = () => {
    const {reviewsList} = this.props
    const len = reviewsList.length
    const {position} = this.state
    if (position < len - 1) {
      this.setState(prevCount => ({
        position: prevCount.position + 1,
      }))
    }
  }

  imagesUrls = () => {
    const {reviewsList} = this.props
    const {position} = this.state
    return reviewsList[position]
  }

  render() {
    const imagesurls = this.imagesUrls()
    return (
      <div className="container">
        <div className="mainContainer">
          <h1>Reviews</h1>
          <img src={imagesurls.imgUrl} alt={imagesurls.username} />
          <div className="arrow">
            <button id="leftArrow" type="button" className="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrowimage"
                onClick={this.leftArrowButton}
              />
            </button>
            <p>{imagesurls.username}</p>
            <button id="rightArrow" type="button" className="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt="right arrow"
                className="arrowimage"
                onClick={this.rightArrowButton}
              />
            </button>
          </div>
          <p className="desc">{imagesurls.companyName}</p>
          <p className="desc">{imagesurls.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
