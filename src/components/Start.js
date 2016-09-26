import React, { Component } from 'react'

class Start extends Component {

  static propTypes = {
    startGame: React.PropTypes.func,
    setDifficulty: React.PropTypes.func
  }

  render () {
    return <div className='startgame'>
      <p>The Riddler has left clues behind in different locations around Gotham City.</p>
      <p>Can you help Batman capture The Riddler by solving his riddles?</p>
      <select className='menu' onChange={this.props.setDifficulty}>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
      <div className='batman'>
        Batman
      </div>
      <button className='startbutton' onClick={this.props.startGame}>Start</button>
    </div>
  }
}
export default Start
