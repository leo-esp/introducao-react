import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import characters from './mock';
import Header from './Header'

export default class Character extends Component {

  constructor() {
    super();
    this.state = {
      characters: characters
    }
  }
  
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col md={6}>
              <img src={`${this.state.characters[0].thumbnail.path}.${this.state.characters[0].thumbnail.extension}`} alt="..." style={{width: 'inherit'}}/>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <h5>Quadrinhos</h5>
                  <ul class="list-group">
                    {
                      this.state.characters[0].comics.items.map((comic) => (
                        <li class="list-group-item">{comic.name}</li>
                      ))
                    }
                  </ul>
                </Col>
                <Col md={6}>
                  <h5>Séries</h5>
                  <ul class="list-group">
                    {
                      this.state.characters[0].series.items.map((serie) => (
                        <li class="list-group-item">{serie.name}</li>
                      ))
                    }
                  </ul>
                </Col>
                <Col md={6}>
                  <h5>Histórias</h5>
                  <ul class="list-group">
                  {
                      this.state.characters[0].stories.items.map((story) => (
                        <li class="list-group-item">{story.name}</li>
                      ))
                    }
                  </ul>
                </Col>
                <Col md={6}>
                  <h5>Eventos</h5>
                  <ul class="list-group">
                  {
                      this.state.characters[0].events.items.map((event) => (
                        <li class="list-group-item">{event.name}</li>
                      ))
                    }
                  </ul>
                </Col>
              </Row>
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
}
