import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react'
import Map from './Components/Map'
import './App.css'
import dotenv from 'dotenv'
dotenv.config()
function App (props) {
  return (
    <div className='App'>
      <a href='#sidebar' className='skip-link'>skip to content</a>
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
  apiKey: process.env.REACT_APP_MAP_API_KEY
})(App)
