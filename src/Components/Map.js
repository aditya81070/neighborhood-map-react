import React, { Component } from 'react'

class Map extends Component {
  state = {
    map: '',
    InfoWindow: {}
  }

  componentDidMount () {
    this.loadMap()
  }

  loadMap () {
    if (this.props && this.props.google) {
      const self = this
      const map = new window.google.maps.Map(document.querySelector('#map'), {
        center: {
          lat: 26.795185925006212,
          lng: 75.82552590576803
        },
        mapTypeControl: false,
        zoom: 13
      })

      const InfoWindow = new window.google.maps.InfoWindow({})

      this.setState({ map , InfoWindow })
    }
  }
  render () {
    const style = {
      width: '100%',
      height: `${window.innerHeight}px`
    }
    return (
      <div>
        <div id='map' style={style} />
      </div>
    )
  }
}

export default Map
