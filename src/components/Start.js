import React, { Component } from 'react'

class Start extends Component {
  render () {
    return <div className='startgame'>
      <p>Can you help Batman solve the Riddler's riddles?</p>
      <button onClick={this.props.startGame}>Start</button>
      <div className='batman'>
        Batman
      </div>
      <select onChange={this.props.setDifficulty}>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
    </div>
  }
}
export default Start
