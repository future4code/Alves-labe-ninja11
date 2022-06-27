import React, { Component } from 'react'
import Header from './components/Header/Header'

export default class App extends Component {
  render() {
    return (
      <div>  
         <Header/>

         <button>Quero ser um ninja</button>
         <button>Contratar um ninja</button>    
      </div>
    )
  }
}

