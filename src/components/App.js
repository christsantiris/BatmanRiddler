import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { shuffle } from '../utility'

class App extends Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    params: React.PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      questions: [],
      difficulty: props.params.difficulty || 'easy',
      correctAnswers: 0,
      incorrectAnswers: 0,
      win: false,
      lose: false
    }
  }

  startGame = () => {
    let difficulty = this.state.difficulty
    let url = `https://beoderp.herokuapp.com/${difficulty}questions`
    window.fetch(url, { method: 'GET', headers: { 'Authorization': 'Bearer Chris' } })
       .then((resp) => { return resp.json() })
       .then((data) => {
         this.setState({ questions: shuffle(data) })
         if (!this.props.params.difficulty) {
           browserHistory.push(`/game/${difficulty}`)
         }
       })
  }

  setDifficulty = (event) => {
    this.setState({difficulty: event.target.value})
  }

  incrementCorrect = () => {
    const newScore = this.state.correctAnswers + 1
    this.setState({ correctAnswers: newScore, win: newScore >= 5 })
    if (newScore >= 5) {
      document.querySelector('.modal.hidden').className = 'modal'
    } else if (newScore) {
      browserHistory.push(`/game/${this.state.difficulty}`)
    }
  }

  incrementIncorrect = () => {
    const newScore = this.state.incorrectAnswers + 1
    this.setState({ incorrectAnswers: newScore, lose: newScore >= 4 })
    if (newScore >= 5) {
      document.querySelector('.losemodal.hidden').className = 'losemodal'
    } else if (newScore) {
      browserHistory.push(`/game/${this.state.difficulty}`)
    }
  }

  render () {
    return <div className='startscreen'>
      <div className='display'>
        <div className='correct'>Correct Answers: {this.state.correctAnswers}</div>
        <h1>Batman vs The Riddler!</h1>
        <div className='incorrect'>Incorrect Answers: {this.state.incorrectAnswers}</div>
      </div>
      <div className='modal hidden' />
      <div className='losemodal hidden' />
      {React.cloneElement(this.props.children, { setDifficulty: this.setDifficulty, startGame: this.startGame, questions: this.state.questions, difficulty: this.state.difficulty, incrementCorrect: this.incrementCorrect, incrementIncorrect: this.incrementIncorrect })}
    </div>
  }
}

export default App
