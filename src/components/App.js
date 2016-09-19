import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: [],
      difficulty: 'easy'
    }
  }

  startGame = () => {
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

  setDifficulty = (event) => {
    this.setState({difficulty: event.target.value})
  }

  render () {
    return <div className='startscreen'>
      <h1>Batman vs The Riddler!</h1>
      <nav>
        <ul>
          <li><Link to='/'>Back</Link></li>
        </ul>
      </nav>
      <main>
        {this.props.children && React.cloneElement(this.props.children, {setDifficulty: this.setDifficulty, startGame: this.startGame, questions: this.state.questions, difficulty: this.state.difficulty})}
      </main>
    </div>
  }
}

export default App
