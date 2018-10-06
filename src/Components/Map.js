import React, { Component } from 'react'

class Map extends Component {
  state = {
    map: '',
    infoWindow: {},
    locations: [{
          'title': "JECRC Foundation",
          'type': "college",
          'position': {
            'lat': 26.782285517540508,
            'lng': 75.8242433741306
          },
          'venueId': '4c94731df7cfa1cdf617b415'
        },
        {
          'title': "Jaipur Exhibition & Convention Centre",
          'type': "convention-hall",
          'position': {
            'lat': 26.786759046475776,
            'lng': 75.82659278168461
          },
          'venueId': '5495646b498e8683bef9f8ed'
        },
        {
          'title': "Crowne Plaza Jaipur Tonk Road",
          'type': "resort",
          'position': {
            'lat': 26.779738281772666,
            'lng': 75.82785145297542
          },
          'venueId': '537b8e8611d2cbd28ac541cf'
        },
        {
          'title': "Mahatama Gandhi Hospital and Medical Collage",
          'type': "hospital",
          'position': {
            'lat': 26.768794416065216,
            'lng': 75.85546348778051
          },
          'venueId': '4de5f6107d8b53987c5547a5'
        },
        {
          'title': "Pratap Plaza,Jaipur",
          'type': "restaurant",
          'position': {
            'lat': 26.80316485639992,
            'lng': 75.81587826043936
          },
          'venueId': '4ec0146a7ee54e4cd2cf95f3'
        },
        {
          'title': "Rajasthan University of Health Sciences",
          'type': "college",
          'position': {
            'lat': 26.806428649557468,
            'lng': 75.8238064027468
          },
          'venueId': '4f3a1df2e4b0a4d44354a379'
        },
        {
          'title': "Marigold Hotel",
          'type': "hotel",
          'position': {
            'lat': 26.788387345603397,
            'lng': 75.83125743239772
          },
          'venueId': '56ee7dac498eb8c8b1ac9cfd'
        },
        {
          'title': "Narayan hrudayalaya",
          'type': "hospital",
          'position': {
            'lat': 26.795185925006212,
            'lng': 75.82552590576803
          },
          'venueId': '4e3d08948877b00cfc41b484'
        },
        {
          'title': "Chokhi Dhani",
          'type': "resort",
          'position': {
            'lat': 26.766890405347645,
            'lng': 75.83608081536072
          },
          'venueId': '4b6dab03f964a520bd842ce3'
        }]
  }

  componentDidMount () {
    this.loadMap()
  }
  
  openInfoWindow = (marker) => {
    this.state.infoWindow.open(this.state.map, marker)
    this.state.infoWindow.setContent('something')
  }

  closeInfoWindow = (marker) => {
    this.state.infoWindow.close()
  }
  setMarkers = (map) => {
    const locations = []
    
    this.state.locations.map((location) => {
      let longname = `${location.title} - ${location.type}`
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(location.position),
        animation: window.google.maps.Animation.DROP,
        map,
        title: location.title
      })
    location.longname = longname
    location.marker = marker
    location.visible = true
    locations.push(location)

    marker.addListener('click', () => {
      this.openInfoWindow(marker)
    })
    })
    
    this.setState({ locations })

  }
  loadMap () {
    if (this.props && this.props.google) {
      const map = new window.google.maps.Map(document.querySelector('#map'), {
        center: {
          lat: 26.795185925006212,
          lng: 75.82552590576803
        },
        mapTypeControl: false,
        zoom: 13
      })

      const infoWindow = new window.google.maps.InfoWindow({})
      
      window.google.maps.event.addDomListener(window, 'resize', () => {
        const center = map.getCenter()
        window.google.maps.event.trigger(map, 'resize')
        this.state.map.setCenter(center)
      })

      window.google.maps.event.addListener(map, 'click', () => {
        this.closeInfoWindow()
      })
      this.setState({ map , infoWindow })
      this.setMarkers(map)
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
