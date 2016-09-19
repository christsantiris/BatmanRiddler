import React, { Component } from 'react'
import { Link } from 'react-router'

class Start extends Component {
  constructor () {
    super()
    this.state = {
      questions: [],
      difficulty: ''
    }
  }
  _startGame () {
    window.fetch(`https://jsonp.afeld.me/?url=http://www.opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`)
       .then((resp) => { return resp.json() })
       .then((data) => {
         this.setState({ questions: data.results })
       })
  }

  render () {
    return <div className='startgame'>
      <p>Can you help Batman solve the Riddler's riddles?</p>
      <div className='batman'>
        Batman
      </div>
      <select>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
    </div>
  }
}
export default Start
