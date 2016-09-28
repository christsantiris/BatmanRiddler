import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { shuffle } from '../utility'
import cx from 'classnames'

class App extends Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    params: React.PropTypes.object,
    resetGame: React.PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      questions: [],
      clickedCells: [],
      difficulty: props.params.difficulty || 'easy',
      correctAnswers: 0,
      incorrectAnswers: 0,
      win: false,
      lose: false
    }
  }

  changeCell = (index, status) => {
    let newCells = this.state.clickedCells.slice(0)
    newCells[index] = status
    this.setState({clickedCells: newCells})
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
      this.setState({ win: true })
    } else if (newScore) {
      browserHistory.push(`/game/${this.state.difficulty}?a=c`)
    }
  }

  incrementIncorrect = () => {
    const newScore = this.state.incorrectAnswers + 1
    this.setState({ incorrectAnswers: newScore, lose: newScore >= 4 })
    if (newScore >= 5) {
      this.setState({ lose: true })
    } else if (newScore) {
      browserHistory.push(`/game/${this.state.difficulty}?a=i`)
    }
  }

  resetGame = () => {
    this.setState({difficulty: 'easy', questions: null, incorrectAnswers: 0, correctAnswers: 0, lose: false, clickedCells: []})
  }

  render () {
    return <div className='startscreen'>
      <div className='display'>
        <div className='correct'>Correct Answers: {this.state.correctAnswers}</div>
        <h1>Batman vs The Riddler</h1>
        <div className='incorrect'>Incorrect Answers: {this.state.incorrectAnswers}</div>
      </div>
      {/* <div className={cx('modal', { 'hidden': !this.state.win })} />
      <div className={cx('losemodal', { 'hidden': !this.state.lose })} /> */}
      <div className={cx('modal', { 'hidden': !this.state.win })}><Link to='/'><button className='backbutton' onClick={this.resetGame}>Reset</button></Link></div>
      <div className={cx('losemodal', { 'hidden': !this.state.lose })}><Link to='/'><button className='backbutton' onClick={this.resetGame}>Reset</button></Link></div>
      {React.cloneElement(this.props.children, {setDifficulty: this.setDifficulty, startGame: this.startGame, questions: this.state.questions, difficulty: this.state.difficulty, incrementCorrect: this.incrementCorrect, incrementIncorrect: this.incrementIncorrect, resetGame: this.resetGame, clickedCells: this.state.clickedCells, changeCell: this.changeCell})}
    </div>
  }
}

export default App
