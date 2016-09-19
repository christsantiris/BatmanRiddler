import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class Start extends Component {
  constructor () {
    super()
    this.state = {
      questions: [],
      difficulty: 'easy'
    }
  }
  _startGame () {
    const baseUrl = 'https://jsonp.afeld.me/?'
    let url = 'http://www.opentdb.com/api.php?'
    let amount = 16
    let difficulty = this.state.difficulty
    let type = 'multiple'
    let dataUrl = baseUrl.concat('url=', url, 'amount=', amount, '&', 'difficulty=', difficulty, '&', 'type=', type)
    window.fetch(dataUrl)
       .then((resp) => { return resp.json() })
       .then((data) => {
         this.setState({ questions: data.results })
         browserHistory.push('/board')
       })
  }
  _setDifficulty (event) {
    this.setState({difficulty: event.target.value})
  }
  render () {
    return <div className='startgame'>
      <p>Can you help Batman solve the Riddler's riddles?</p>
      <button onClick={this._startGame.bind(this)}>Start</button>
      <div className='batman'>
        Batman
      </div>
      <select onChange={this._setDifficulty.bind(this)}>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
    </div>
  }
}
export default Start
