// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  buttonClick = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    console.log(randomNumber)
    this.setState(prevState => ({count: randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-bg">
        <div className="card-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.buttonClick}>Generate</button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
