import React, { Component } from 'react'

class Start extends Component {

  static propTypes = {
    startGame: React.PropTypes.func,
    setDifficulty: React.PropTypes.func
  }

  render () {
    return <div className='startgame'>
      <div className='left'>
        <p>The Riddler has left clues behind in different locations around Gotham City.</p>
        <p>Can you help Batman capture The Riddler by solving his riddles?</p>
        <div className='batman'>
          Batman
        </div>
        <select className='menu' onChange={this.props.setDifficulty}>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
        <button className='startbutton' onClick={this.props.startGame}>Start</button>
      </div>
    </div>
  }
}
export default Start
