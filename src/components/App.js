import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

class App extends Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      questions: [],
      difficulty: 'easy',
      correctAnswers: 0,
      incorrectAnswers: 0
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

  incrementCorrect = () => {
    this.setState({ correctAnswers: this.state.correctAnswers + 1 })
    if (this.state.correctAnswers === 5) {
      window.alert('You win')
    }
  }

  incrementIncorrect = () => {
    this.setState({ incorrectAnswers: this.state.incorrectAnswers + 1 })
    if (this.state.incorrectAnswers === 5) {
      window.alert('You Lose')
    }
  }
  render () {
    return <div className='startscreen'>
      <h1>Batman vs The Riddler!</h1>
      <nav>
        <ul>
          <li><Link to='/'>Back</Link></li>
        </ul>
      </nav>
      <div className='correct'>Correct Answers: {this.state.correctAnswers}</div>
      <div className='incorrect'>Incorrect Answers: {this.state.incorrectAnswers}</div>
        {React.cloneElement(this.props.children, { setDifficulty: this.setDifficulty, startGame: this.startGame, questions: this.state.questions, difficulty: this.state.difficulty, incrementCorrect: this.incrementCorrect, incrementIncorrect: this.incrementIncorrect })}
    </div>
  }
}

export default App
