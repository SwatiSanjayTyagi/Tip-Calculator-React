import React , { Component } from 'react'
import './App.css'
import Header from '../src/components/Header'
import InputDetails from '../src/components/InputDetails'

import Footer from '../src/components/Footer'

class App extends Component {
  	constructor(props) {
      super (props)
    }

    render () {
      return (
        <div className="container">
          <Header/>
          <br/>
          <br/>
          <InputDetails/>
          <br/>
          <br/>
          <Footer/>
        </div>
      )
    }
}

export default App