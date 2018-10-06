import React, { Component } from 'react'

class LocationItem extends Component {
  render () {
    return (
      <li role='button' className='location-item' tabIndex='0'
        onClick={() => {
          this.props.openInfoWindow(this.props.data.marker)
          this.props.getMarkerInfo(this.props.data)
        }}>
        {this.props.data.longName}
      </li>
    )
  }
}

export default LocationItem
