import React, { Component } from 'react'

class LocationList extends Component {
  state = {
    query: ''
  }

  filterLocation = (query) => {
    this.setState({ query })
  }
  render () {
    return (
      <div className='search'>
        <input type='text' role='search' aria-labelledby='filter' id='search-field'
          value={this.state.query}
          onChange={(e) => (this.filterLocation(e.target.value))} />
      </div>
    )
  }
}

export default LocationList
