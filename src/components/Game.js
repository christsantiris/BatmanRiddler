import React, { Component } from 'react'

class Game extends Component {

  constructor () {
    super()
    this.state = {
      questions: []
    }
  }
  componentWillMount () {
    window.fetch(`http://jservice.io/api/random?count=10`)
       .then((resp) => { return resp.json() })
       .then((data) => {
         this.setState({ questions: data })
       })
  }
  onAnswer = (newGuess) => {
    const newAnswer = this.state.answer
  }
  render () {
    if (this.state.questions.length > 0) {
      this.state.questions.map((questions, index) => {
      })
      return <div className='gamescreen'>
        <h2>This is the start page</h2>
        <p>{this.state.questions[0].question}</p>
        <input onGuess={this.onAnser}></input>
      </div>
    } else {
      return <p>Loading...</p>
    }
  }
}
export default Game
