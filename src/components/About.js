import React, { Component } from 'react'
import { Link } from 'react-router'

class About extends Component {

  static propTypes = {
    resetGame: React.PropTypes.func
  }
  render () {
    return <div className='about'>
      <h1>About this Game</h1>
      <div className='description'>
        <p>To play this game, choose your difficulty, and click start.</p>
        <p>You will play as Batman.</p>
        <p>The Riddler, an arch enemy of Batman's, has left trivia questions or riddles behind at each location.</p>
        <p>Your objective is to explore Gotham City and solve the questions in order to outsmart The Riddler. If you solve 5, you win. If you get 4 wrong, you lose.</p>
        <p>
          <a href="https://twitter.com/home?status=I'm%20playing%20Batman%20vs%20The%20Riddler.%20Click%20this%20link%20to%20check%20this%20awesome%20game%20out!%20%0Ahttp%3A//batmanvsriddler.surge.sh/%0A">Share this game on Twitter</a>
        </p>
        <p>
          <a href='https://www.facebook.com/sharer/sharer.php?u=http%3A//batmanvsriddler.surge.sh/'>Share this game on Facebook</a>
        </p>
      </div>
      <footer>
        <Link to='/'><button className='backbutton' onClick={this.props.resetGame}>Reset</button></Link>
      </footer>
    </div>
  }
}
export default About
