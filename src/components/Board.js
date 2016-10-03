import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import cx from 'classnames'

const cells = [
  {
    className: 'riddler',
    location: 'The Riddler\'s Hideout'
  },
  {
    className: 'port',
    location: 'Gotham City Port'
  },
  {
    className: 'arkham',
    location: 'Arkham Asylum'
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
    className: 'jail',
    location: 'Gotham City Jail'
  },
  {
    className: 'sewer',
    location: 'Gotham City Sewer'
  },
  {
    className: 'warehouse',
    location: 'An Abandoned Warehouse'
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
    className: 'police',
    location: 'GCPD'
  },
  {
    className: 'hospital',
    location: 'Gotham Hospital'
  },
  {
    className: 'club',
    location: 'Gotham Explorer\'s Club'
  },
  {
    className: 'dinner',
    location: 'Gotham Bay Dinner'
  },
  {
    className: 'alley',
    location: 'Crime Alley'
  },
  {
    className: 'traintracks',
    location: 'Gotham Railroad Tracks'
  },
  {
    className: 'hippodrome',
    location: 'Gotham Hippodrome'
  }
]
class Board extends Component {

  static propTypes = {
    startGame: React.PropTypes.func,
    questions: React.PropTypes.array,
    params: React.PropTypes.object,
    location: React.PropTypes.object,
    resetGame: React.PropTypes.func,
    clickedCells: React.PropTypes.func,
    changeCell: React.PropTypes.func
  }

  componentDidMount () {
    if (this.props.questions.length === 0) {
      this.props.startGame()
    }
  }

  disableDiv = (index) => {
    this.props.changeCell(index, true)
    browserHistory.push(`/game/${this.props.params.difficulty}/${index}`)
  }

  enableDiv = (index) => {
    this.props.changeCell(index, false)
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
            if (this.props.clickedCells[index]) {
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
