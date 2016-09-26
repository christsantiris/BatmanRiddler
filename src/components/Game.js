import React, { Component } from 'react'
import { Link } from 'react-router'
import { shuffle } from '../utility'

class Game extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    questions: React.PropTypes.array,
    incrementCorrect: React.PropTypes.func,
    incrementIncorrect: React.PropTypes.func,
    correctAnswers: React.PropTypes.number,
    incorrectAnswers: React.PropTypes.number,
    startGame: React.PropTypes.func,
    enableDiv: React.PropTypes.func
  }

  componentDidMount () {
    if (this.props.questions.length === 0) {
      this.props.startGame()
    }
  }
  render () {
    const question = this.props.questions[this.props.params.index]
    if (this.props.questions.length > 0) {
      return <div className='gamescreen'>
        <h2>Here is the your riddle:</h2>
        <p>
          <span dangerouslySetInnerHTML={{__html: question.question}} />
        </p>
        {shuffle([
          <button className='choice' onClick={this.props.incrementCorrect} key={0}> <span dangerouslySetInnerHTML={{__html: question.correct_answer}} /></button>,
          <button className='choice' onClick={this.props.incrementIncorrect} key={1}> <span dangerouslySetInnerHTML={{__html: question.incorrect_answers[0]}} /></button>,
          <button className='choice' onClick={this.props.incrementIncorrect} key={2}> <span dangerouslySetInnerHTML={{__html: question.incorrect_answers[1]}} /></button>,
          <button className='choice' onClick={this.props.incrementIncorrect} key={3}> <span dangerouslySetInnerHTML={{__html: question.incorrect_answers[2]}} /></button>
        ])}
      </div>
    } else {
      return <Link to={`/game/${this.props.params.difficulty}`} onClick={(index) => this.disableDiv()}><button>Back</button></Link>
    }
  }
}
export default Game
