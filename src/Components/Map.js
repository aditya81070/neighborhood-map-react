import React, { Component } from 'react'
import LocationList from './LocationList'

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
          'venueId': '4c94731df7cfa1cdf617b415',
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
    this.closeInfoWindow()
    this.state.infoWindow.open(this.state.map, marker)
    marker.setAnimation(window.google.maps.Animation.BOUNCE)
    this.setState({ 'prevMarker': marker })
    this.state.infoWindow.setContent('<h4>Loading Data...</h4>')
    this.state.map.setCenter(marker.getPosition())
  }

  getMarkerInfo (location) {
    const self = this
    const clientId = 'IVR2BCQPW0NBT0Y3L30KFVMAI0EH4Z5TT3AUHQT0P2LPRKI1'
    const clientSecret = 'OSFARAATAMYFPG5CKJSTDECNGXKHMXUQ0IML2NHPRFOWHPJD'
    const url = `https://api.foursquare.com/v2/venues/${location.venueId}?client_id=${clientId}&client_secret=${clientSecret}&v=20181006`
    fetch (url)
      .then((response) => {
        if (response.status !== 200) {
          self.state.infoWindow.setContent('Sorry data cannot be loaded :(')
          return
        }
        response.json().then(({ response }) => {
        const { venue } = response
        self.state.infoWindow.setContent(`<div class='marker-info' tabindex=-1>
        <h2 tabindex=0 id='venuename'>${venue.name}</h2>
        <p><strong>Verified Location: </strong>${venue.verified ? 'Yes' : 'No'}</p>
        <p><strong>tip count: </strong>${venue.stats.tipCount}</p>
        <p>${venue.rating ? '<strong>Rating: </strong>'+ venue.rating: ''}</p>
        <p><a href='${venue.canonicalUrl}' target='_blank'>Read more</a></p>
        </div>`)
        // document.querySelector('#venuename').focus()
      })
      })
      .catch((err) => {
        self.state.infoWindow.setContent('Sorry data cannot be loaded :(')
        console.log(err)
      })
  }
  closeInfoWindow = () => {
    if (this.state.prevMarker) {
      this.state.prevMarker.setAnimation(null)
    }
    this.setState({ prevMarker: ''})
    this.state.infoWindow.close()
  }
  setMarkers = (map) => {
   const locations = this.state.locations.map((location) => {
      let longName = `${location.title} - ${location.type}`
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(location.position),
        animation: window.google.maps.Animation.DROP,
        map,
        title: location.title
      })
    location.longName = longName
    location.marker = marker
    location.visible = true
    marker.addListener('click', () => {
      this.openInfoWindow(marker)
      this.getMarkerInfo(location)
    })

    marker.addListener('mouseover', () => {
      marker.setAnimation(window.google.maps.Animation.BOUNCE)
    })

    marker.addListener('mouseout', () => {
      marker.setAnimation(null)
    })
    
    return location
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
    return (
      <div className='main'>
        <LocationList locations={this.state.locations} 
          openInfoWindow={this.openInfoWindow} 
          closeInfoWindow={this.closeInfoWindow} getMarkerInfo={this.getMarkerInfo.bind(this)} />
          <div id='map' role='application' />
      </div>
    )
  }
}

export default Map
