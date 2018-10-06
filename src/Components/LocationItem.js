import React from 'react'

function LocationItem (props) {
  return (
    <li role='button' className='location-item' tabIndex='0'
      onClick={() => {
        props.openInfoWindow(props.data.marker)
        props.getMarkerInfo(props.data)
      }}
      onKeyPress={() => {
        props.openInfoWindow(props.data.marker)
        props.getMarkerInfo(props.data)
      }}>
      {props.data.longName}
    </li>
  )
}

export default LocationItem
