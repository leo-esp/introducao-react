import React, { Component } from 'react'
import './App.css';
import characters from './mock';
import api from "./services";
import Card from './Card'
import FormMarvel from './FormMarvel'
import Header from './Header'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters
    }
  }

  render() {
    return (
      <div className="App">
        
        <Header />
        <FormMarvel />
        
        {
          this.state.characters.length > 0 &&
          <div className="container pb-5">
            <div className="row mt-5">

              {
                this.state.characters.map((character) => (
                  <div className="col-md-3">
                    <Card data={character}  />
                  </div>
                ))
              }
            </div>
          </div>
        }
      </div >
    );
  }
}