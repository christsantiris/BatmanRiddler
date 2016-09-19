import React, { Component } from 'react'

class Game extends Component {

  // constructor () {
  //   super()
  //   this.state = {
  //     questions: this.state,
  //     difficulty: ''
  //   }
  // }

  render () {
    if (this.props.questions.length > 0) {
      const { questions } = this.props
      const [a, b, c, d] = [questions[0].correct_answer, ...questions[0].incorrect_answers]
      const array = [a, b, c, d]
      const shuffle = (array) => {
        let m = array.length
        let t
        let i
        // While there remain elements to shuffle…
        while (m) {
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--)
          // And swap it with the current element.
          t = array[m]
          array[m] = array[i]
          array[i] = t
        }
        console.log(array)
        return array
      }
      this.props.questions.map((questions, index) => {
      })
      return <div className='gamescreen'>
        <h2>Here is the your riddle:</h2>
        <p>
          <span dangerouslySetInnerHTML={{__html: this.props.questions[0].question}} />
        </p>
        {shuffle([<button>{this.props.questions[0].correct_answer}</button>,
          <button>{this.props.questions[0].incorrect_answers[0]}</button>,
          <button>{this.props.questions[0].incorrect_answers[1]}</button>,
          <button>{this.props.questions[0].incorrect_answers[2]}</button>])}
      </div>
    } else {
      return <p>Loading...</p>
    }
  }
}
export default Game
