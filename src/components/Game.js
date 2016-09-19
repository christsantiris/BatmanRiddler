import React, { Component } from 'react'

class Game extends Component {

  constructor () {
    super()
    this.state = {
      questions: [],
      difficulty: 'Hard',

    }
  }

  // componentWillMount () {
  //   window.fetch(`https://jsonp.afeld.me/?url=http://www.opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`)
  //      .then((resp) => { return resp.json() })
  //      .then((data) => {
  //        this.setState({ questions: data.results })
  //      })
  // }
  render () {
    if (this.state.questions.length > 0) {
      const { questions } = this.state
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
      this.state.questions.map((questions, index) => {
      })
      return <div className='gamescreen'>
        <h2>Here is the your riddle:</h2>
        <p>
          <span dangerouslySetInnerHTML={{__html: this.state.questions[0].question}} />
        </p>
        {shuffle([<button>{this.state.questions[0].correct_answer}</button>,
          <button>{this.state.questions[0].incorrect_answers[0]}</button>,
          <button>{this.state.questions[0].incorrect_answers[1]}</button>,
          <button>{this.state.questions[0].incorrect_answers[2]}</button>])}
      </div>
    } else {
      return <p>Loading...</p>
    }
  }
}
export default Game
