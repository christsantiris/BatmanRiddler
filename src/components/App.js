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
      incorrectAnswers: 0,
      win: false,
      lose: false
    }
  }

  startGame = () => {
    let url = ' https://beoderp.herokuapp.com/questions'
    let amount = 16
    let difficulty = this.state.difficulty
    window.fetch(url)
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
    const newScore = this.state.correctAnswers + 1
    this.setState({ correctAnswers: newScore, win: newScore >= 5 })
    if (newScore >= 5) {
      window.alert('You Win')
    } else if (newScore) {
      window.alert('Nice')
    }
  }

  incrementIncorrect = () => {
    const newScore = this.state.incorrectAnswers + 1
    this.setState({ incorrectAnswers: newScore, lose: newScore >= 5 })
    if (newScore >= 5) {
      window.alert('You Lose')
    } else if (newScore) {
      window.alert('No')
    }
  }

  render () {
    return <div className='startscreen'>
      <h1>Batman vs The Riddler!</h1>
      <div className='correct'>Correct Answers: {this.state.correctAnswers}</div>
      <div className='incorrect'>Incorrect Answers: {this.state.incorrectAnswers}</div>
      {React.cloneElement(this.props.children, { setDifficulty: this.setDifficulty, startGame: this.startGame, questions: this.state.questions, difficulty: this.state.difficulty, incrementCorrect: this.incrementCorrect, incrementIncorrect: this.incrementIncorrect })}
    </div>
  }
}

export default App
