import React, { Component } from 'react'

class LocationList extends Component {
  state = {
    query: '',
    location: [],
    suggestions: true
  }

  filterLocation = (query) => {
    this.props.closeInfoWindow()
    const locations = this.props.locations.map((location) => {
      if (location.longName.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        location.marker.setVisible(true)
      } else {
        location.marker.setVisible(false)
      }
      return location
    })
    this.setState({ query, locations })
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
