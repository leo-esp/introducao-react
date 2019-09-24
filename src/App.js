import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Biblioteca from './Biblioteca'
import Character from './Character'


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Biblioteca} />
        <Route path="/personagem/:id" component={Character} />
      </Router>
    );
  }
}