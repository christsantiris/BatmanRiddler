import React, { Component } from 'react'

class Start extends Component {
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
  render () {
    if (this.state.questions.length > 0) {
      this.state.questions.map((questions, index) => {
      })
      console.log(this.state.questions[0])
      const id = JSON.stringify(this.state.questions[0])
      const newId = JSON.parse(id || null)
      return <div>
        <h2>This is the start page</h2>
        {this.state.questions[0].question}
      </div>
    } else {
      return <p>Loading...</p>
    }
  }
}

export default Start
