import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class App extends Component {
  constructor () {
    super()
    this.state = {
      questions: [],
      difficulty: 'Hard',
      correct: [],
      incorrect: []
    }
  }
  _startGame () {
    // var that = this
    window.fetch(`https://jsonp.afeld.me/?url=http://www.opentdb.com/api.php?amount=16&difficulty=easy&type=multiple`)
       .then((resp) => {
         return resp.json() })
       .then((data) => {
         this.setState({ questions: data.results })
         browserHistory.push('/board')
       })
  }

  render () {
    return <div className='startscreen'>
      <h1>Batman vs The Riddler!</h1>
      <nav>
        <ul>
          <li><Link to='/'>Back</Link></li>
          <li><Link to='/board'>Start</Link></li>
        </ul>
      </nav>
      <button onClick={this._startGame.bind(this)}>Start</button>
      <main>
        {this.props.children}
      </main>
    </div>
  }
}

export default App
