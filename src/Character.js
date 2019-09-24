import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import characters from './mock';
import Header from './Header'
import api from './services'

export default class Character extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    api.characters.id(this.props.match.params.id).get((err, res) => {
      if (err) {
        throw err
      } else {
        this.setState({ personagem: res[0] })
      }
    })
  }


  render() {
    return (
      <div>
        <Header />
        {
          this.state.personagem ?
            (<Container>
              <Row>
                <Col md={6}>
                  <img src={`${this.state.personagem.thumbnail.path}.${this.state.personagem.thumbnail.extension}`} alt="..." style={{ width: 'inherit' }} />
                </Col>
                <Col md={6}>
                  <Row>
                    <Col md={6}>
                      {
                        this.state.personagem.comics.items.length > 0 ?
                          <div>
                            <h5> Quadrinhos</h5>
                            <ul className="list-group">
                              {
                                this.state.personagem.comics.items.map((comic, i) => (
                                  <li key={i} className="list-group-item">{comic.name}</li>
                                ))
                              }
                            </ul>
                          </div> 
                          :
                          <h5>Este personagem não tem quadrinhos =/ </h5>
                    }
                    </Col>
                    <Col md={6}>
                      <h5>Séries</h5>
                      <ul className="list-group">
                        {
                          this.state.personagem.series.items.map((serie, i) => (
                            <li key={i} className="list-group-item">{serie.name}</li>
                          ))
                        }
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h5>Histórias</h5>
                      <ul className="list-group">
                        {
                          this.state.personagem.stories.items.map((story, i) => (
                            <li key={i} className="list-group-item">{story.name}</li>
                          ))
                        }
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h5>Eventos</h5>
                      <ul className="list-group">
                        {
                          this.state.personagem.events.items.map((event, i) => (
                            <li key={i} className="list-group-item">{event.name}</li>
                          ))
                        }
                      </ul>
                    </Col>
                  </Row>
                </Col>

              </Row>
            </Container>) : (<h1>TESTE</h1>)
        }
      </div>
    )
  }
}
