import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react'
import Map from './Components/Map'
import './App.css'
// import hamburger from './hamburger.svg'
import hamburger from './hamburger.svg'

function App (props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Welcome to Neighborhood Map</h1>
        <div className='nav'>
          <img src={hamburger} alt='menu' id='menu-icon'/>
        </div>
      </header>
      {
        props.loaded ? (
          <Map google={props.google} />
        ) : (
          <div className='error-loading'>
            <p className='error-msg'>Couldn't load Google maps</p>
          </div>
        )
      }
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDYIakkVfbT7wU-6VOAnE9Up10NvVgfwB0'
})(App)
