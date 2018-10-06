import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react'
import Map from './Components/Map'
import './App.css'

function App (props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Welcome to Neighborhood Map</h1>
      </header>
      <main role='main'>
        {
          props.loaded ? (
            <Map google={props.google} />
          ) : (
            <div className='error-loading'>
              <p className='error-msg'>Couldn't load Google maps</p>
            </div>
          )
        }
      </main>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDYIakkVfbT7wU-6VOAnE9Up10NvVgfwB0'
})(App)
