import React, { Component } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'

const cells = [
  {
    className: 'riddler',
    location: 'The Riddler\'s Hideout'
  },
  {
    className: 'joker',
    location: 'The Joker\'s Hideout'
  },
  {
    className: 'penguin',
    location: 'The Penguin\'s Hideout'
  },
  {
    className: 'arkham',
    location: 'Arkham Asylum'
  },
  {
    className: 'crimescene',
    location: 'The Crime Scene'
  },
  {
    className: 'port',
    location: 'Gotham City Port'
  },
  {
    className: 'bank',
    location: 'Gotham City Bank'
  },
  {
    className: 'falcone',
    location: 'Don Falcone\'s Restaurant'
  },
  {
    className: 'wayne',
    location: 'Wayne Enterprises'
  },
  {
    className: 'park',
    location: 'Gotham Amusement Park'
  },
  {
    className: 'powerplant',
    location: 'Gotham Power Plant'

  },
  {
    className: 'warehouse',
    location: 'An Abandoned Warehouse'
  },
  {
    className: 'sewer',
    location: 'Gotham City Sewer'
  },
  {
    className: 'cityhall',
    location: 'Gotham City Hall'
  },
  {
    className: 'police',
    location: 'GCPD'
  },
  {
    className: 'hospital',
    location: 'Gotham Hospital'
  }

]
class Board extends Component {

  static propTypes = {
    startGame: React.PropTypes.func,
    questions: React.PropTypes.array,
    params: React.PropTypes.object
  }

  componentDidMount () {
    if (this.props.questions.length === 0) {
      this.props.startGame()
    }
  }

  render () {
    return (
      <div className='gotham'>
        <div className='board'>
      {cells.map((cell, index) => {
        return <Link to={`/game/${this.props.params.difficulty}/${index}`} key={index}>
          <div className={cx(cell.className, 'cell')}><p>{cell.location}</p></div>
        </Link>
      })}
        </div>
        <footer><Link to='/'><button className='backbutton'>Back</button></Link></footer>
      </div>
    )
  }
}
export default Board
