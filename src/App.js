import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react'
import Map from './Components/Map'
// import logo from './logo.svg'
// import './App.css'

function App (props) {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <h1 className='App-title'>Welcome to neighborhood map(React)</h1>
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
