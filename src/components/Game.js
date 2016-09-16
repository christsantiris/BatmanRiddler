import React, { Component } from 'react'

class Game extends Component {

  constructor () {
    super()
    this.state = {
      questions: []
    }
  }
  componentWillMount () {
    window.fetch(`https://jsonp.afeld.me/?url=http://www.opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`)
       .then((resp) => { return resp.json() })
       .then((data) => {
         this.setState({ questions: data.results })
       })
  }
  render () {
    if (this.state.questions.length > 0) {
      this.state.questions.map((questions, index) => {
      })
      return <div className='gamescreen'>
        <h2>Here is the first riddle:</h2>
        <p>
          <span dangerouslySetInnerHTML={{__html: this.state.questions[0].question}} />
        </p>
        <button>{this.state.questions[0].correct_answer}</button>
        <button>{this.state.questions[0].incorrect_answers[0]}</button>
        <button>{this.state.questions[0].incorrect_answers[1]}</button>
        <button>{this.state.questions[0].incorrect_answers[2]}</button>
      </div>
    } else {
      return <p>Loading...</p>
    }
  }
}
export default Game
