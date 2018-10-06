import React, { Component } from 'react'
import LocationItem from './LocationItem'

class LocationList extends Component {
  state = {
    query: '',
    locations: [],
    suggestions: true
  }

  componentWillMount () {
    this.setState({
      locations: this.props.locations
    })
  }

  toggleSuggestions = () => {
    this.setState({
      suggestions: !this.state.suggestions
    })
  }
  filterLocation = (query) => {
    this.props.closeInfoWindow()
    const locations = this.props.locations.map((location) => {
      if (location.longName.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        location.marker.setVisible(true)
        location.visible = true
      } else {
        location.marker.setVisible(false)
        location.visible = false
      }
      return location
    })
    this.setState({ query, locations })
  }
  
  render () {
    const locationlist = this.state.locations.filter((location) => location.visible).map((location) => (<LocationItem key={location.venueId}
      openInfoWindow={this.props.openInfoWindow.bind(this)} 
      data={location} 
      getMarkerInfo={this.props.getMarkerInfo}/>))
    return (
      <div className='sidebar'>
        <input type='text' role='search' aria-labelledby='filter' id='search-field'
          value={this.state.query}
          placeholder='Search for place'
          onChange={(e) => (this.filterLocation(e.target.value))} />
          <ul className='location-list'>
            { this.state.suggestions && locationlist }
          </ul>
        <button className='button' onClick={() => (this.toggleSuggestions())}>Show/Hide Suggestions</button>
      </div>
    )
  }
}

export default LocationList
