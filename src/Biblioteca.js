import React, { Component } from 'react'
import './App.css';
import characters from './mock';
import api from "./services";
import Card from './Card'
import FormMarvel from './FormMarvel'
import Header from './Header'

export default class Biblioteca extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    api.characters.offset(40).get((err, res) => {
      if (err) throw err

      console.log(res)
      this.setState({ characters: res })
    })
  }

  submitValues(e) {
    e.preventDefault();
    if(e.target.select.value === 'characters'){
      api.characters.name(e.target.search.value).get((err, res) => {
        if (err) throw err
  
        console.log(res)
        this.setState({ characters: res })
      })
    }else{
      api[e.target.select.value].get((err, res) => {
        if (err) throw err
  
        console.log(res)
        // this.setState({ characters: res })
      })
    }
  }

  render() {
    return (
      <div className="App">

        <Header />
        <FormMarvel onSubmit={this.submitValues.bind(this)} />

        {
          this.state.characters.length > 0 &&
          <div className="container pb-5">
            <div className="row mt-5">

              {
                this.state.characters.map((character, i) => (
                  <div key={i} className="col-md-3">
                    <Card data={character} />
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