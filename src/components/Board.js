import React, { Component } from 'react'
import { Link } from 'react-router'

class Board extends Component {
  render () {
    return (
      <div className='board'>
        <div>
          <Link to='/game'><div className='riddler cell' onClick={event => event.preventDefault}>The Riddler's Hideout</div></Link>
          <Link to='/game'><div className='joker cell' onClick={event => event.preventDefault}>The Joker's Hideout</div></Link>
          <Link to='/game'><div className='penguin cell' onClick={event => event.preventDefault}>The Penguin's Hideout</div></Link>
          <Link to='/game'><div className='falcone cell' onClick={event => event.preventDefault}>Don Falcone's Restaurant</div></Link>
        </div>
        <div>
          <Link to='/game'><div className='cityhall cell' onClick={event => event.preventDefault}>Gotham City Hall</div></Link>
          <Link to='/game'><div className='arkham cell' onClick={event => event.preventDefault}>Arkham Asylum</div></Link>
          <Link to='/game'><div className='warehouse cell' onClick={event => event.preventDefault}>An Abandoned Warehouse</div></Link>
          <Link to='/game'><div className='sewer cell' onClick={event => event.preventDefault}>The Sewer System</div></Link>
        </div>
        <div>
          <Link to='/game'><div className='powerplant cell' onClick={event => event.preventDefault}>Gotham Power Plant</div></Link>
          <Link to='/game'><div className='police cell' onClick={event => event.preventDefault}>GCPD</div></Link>
          <Link to='/game'><div className='hospital cell' onClick={event => event.preventDefault}>Gotham General Hospital</div></Link>
          <Link to='/game'><div className='park cell' onClick={event => event.preventDefault}>Gotham Amusement Park</div></Link>
        </div>
        <div>
          <Link to='/game'><div className='port cell' onClick={event => event.preventDefault}>Gotham City Port</div></Link>
          <Link to='/game'><div className='wayne cell' onClick={event => event.preventDefault}>Wayne Enterprises</div></Link>
          <Link to='/game'><div className='bank cell' onClick={event => event.preventDefault}>The Bank</div></Link>
          <Link to='/game'><div className='crimescene cell' onClick={event => event.preventDefault}>The Crime Scene</div></Link>
        </div>
      </div>
    )
  }
}
export default Board
