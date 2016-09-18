import React, { Component } from 'react'

class Start extends Component {
  render () {
    return <div className='startgame'>
      <p>Can you help Batman solve the Riddler's riddles?</p>
      <div className='batman'>
        Batman
      </div>
      <select>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>
  }
}
export default Start
