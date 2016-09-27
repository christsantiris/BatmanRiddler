import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import cx from 'classnames'

const cells = [
  {
    className: 'riddler',
    location: 'The Riddler\'s Hideout',
    clicked: false
  },
  {
    className: 'port',
    location: 'Gotham City Port',
    clicked: false
  },
  {
    className: 'arkham',
    location: 'Arkham Asylum',
    clicked: false
  },
  {
    className: 'bank',
    location: 'Gotham City Bank',
    clicked: false
  },
  {
    className: 'falcone',
    location: 'Don Falcone\'s Restaurant',
    clicked: false
  },
  {
    className: 'wayne',
    location: 'Wayne Enterprises',
    clicked: false
  },
  {
    className: 'park',
    location: 'Gotham Amusement Park',
    clicked: false
  },
  {
    className: 'powerplant',
    location: 'Gotham Power Plant',
    clicked: false

  },
  {
    className: 'jail',
    location: 'Gotham City Jail',
    clicked: false
  },
  {
    className: 'sewer',
    location: 'Gotham City Sewer',
    clicked: false
  },
  {
    className: 'warehouse',
    location: 'An Abandoned Warehouse',
    clicked: false
  },
  {
    className: 'joker',
    location: 'The Joker\'s Hideout',
    clicked: false
  },
  {
    className: 'penguin',
    location: 'The Penguin\'s Hideout',
    clicked: false
  },
  {
    className: 'police',
    location: 'GCPD',
    clicked: false
  },
  {
    className: 'hospital',
    location: 'Gotham Hospital',
    clicked: false
  },
  {
    className: 'club',
    location: 'Gotham Explorer\'s Club',
    clicked: false
  },
  {
    className: 'dinner',
    location: 'Gotham Bay Dinner',
    clicked: false
  },
  {
    className: 'alley',
    location: 'Crime Alley',
    clicked: false
  },
  {
    className: 'traintracks',
    location: 'Gotham Railroad Tracks',
    clicked: false
  },
  {
    className: 'hippodrome',
    location: 'Gotham Hippodrome',
    clicked: false
  }
]
class Board extends Component {

  static propTypes = {
    startGame: React.PropTypes.func,
    questions: React.PropTypes.array,
    params: React.PropTypes.object,
    location: React.PropTypes.object,
    resetGame: React.PropTypes.func
  }

  componentDidMount () {
    if (this.props.questions.length === 0) {
      this.props.startGame()
    }
  }

  disableDiv = (index) => {
    cells[index].clicked = true
    browserHistory.push(`/game/${this.props.params.difficulty}/${index}`)
  }

  enableDiv = (index, cells) => {
    cells[index].clicked = false
    browserHistory.push(`/game/${this.props.params.difficulty}/${index}`)
  }

  get notice () {
    switch (this.props.location.query.a) {
      case 'i':
        return <div className='notice incorrect' >Your answer was incorrect!</div>
      case 'c':
        return <div className='notice correct' >Your answer was correct!</div>
    }
  }

  render () {
    return (
      <div className='gotham'>
        <div className='board'>
      {cells.map((cell, index) => {
        if (cell.clicked) {
          return <Link key={index} onClick={(e) => e.preventDefault()}>
            <div className='empty'><p>{cell.location}</p></div>
          </Link>
        } else {
          return <Link key={index} onClick={() => this.disableDiv(index)}>
            <div className={cx(cell.className, 'cell')}><p>{cell.location}</p></div>
          </Link>
        }
      })}
        </div>
        <footer className='boardfooter'><Link to='/'><button className='backbutton' onClick={this.props.resetGame}>Reset</button></Link></footer>
        {this.notice}
      </div>
    )
  }
}
export default Board
