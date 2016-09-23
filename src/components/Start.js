import React, { Component } from 'react'

class Start extends Component {

  static propTypes = {
    startGame: React.PropTypes.func,
    setDifficulty: React.PropTypes.func
  }

  render () {
    return <div className='startgame'>
      <p>Can you help Batman solve the Riddler's riddles?</p>
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
