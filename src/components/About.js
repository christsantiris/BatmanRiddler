import React, { Component } from 'react'
import { Link } from 'react-router'

class About extends Component {
  render () {
    return <div className='about'>
      <h1>About this Game</h1>
      <Link to='/'><button className='backbutton' onClick={this.props.resetGame}>Reset</button></Link>
    </div>
  }
}
export default About
