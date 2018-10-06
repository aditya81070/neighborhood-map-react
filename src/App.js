import React, { Component } from 'react'
import { GoogleApiWrapper } from 'google-maps-react'
// import logo from './logo.svg'
// import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          {/* <img src={logo} className='App-logo' alt='logo' /> */}
          <h1 className='App-title'>Welcome to neighborhood map(React)</h1>
        </header>
        {
          this.props.loaded ? (
            // <Map google={this.props.google} />
            <div>Google map is loaded</div>
          ) : (
            <div className='error-loading'>
              <p className='error-msg'>Couldn't load Google maps</p>
            </div>
          )
        }
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDYIakkVfbT7wU-6VOAnE9Up10NvVgfwB0'
})(App)
