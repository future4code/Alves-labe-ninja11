import React, { Component } from 'react'
import Header from './components/Header/Header'
import CreateService from './components/CreateService/CreateService'

export default class App extends Component {
  render() {
    return (
      <div>  
        <CreateService/>
         <Header/>
         <button>Quero ser um ninja</button>
         <button>Contratar um ninja</button>    
      </div>
    )
  }
}

