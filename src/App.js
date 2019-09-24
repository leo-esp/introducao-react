import React, { Component } from 'react'
import './App.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import characters from './mock';
import api from "./services";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters
    }
  }

  componentDidMount() {
    api.characters.id(1011334).get((err, res) => {
      console.log(res)
    })
  }


  render() {
    return (
      <div className="App">
        <div>
          <div className="jumbotron" style={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <img src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png" style={{ width: 200 }} />
          </div>
        </div>

        {/* <Container>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <Form inline>
                <FormGroup className="mr-3">
                  <Label className="mr-2" for="exampleSelect">Tipo de pesquisa</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option value="characters">Personagens</option>
                    <option value="comics">Quadrinhos</option>
                    <option value="creators">Criadores</option>
                    <option value="events">Eventos</option>
                    <option value="series">Series</option>
                    <option value="stories">Histórias</option>
                  </Input>
                </FormGroup>
                <FormGroup className="mr-3">
                  <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    onChange={(value) => { console.log(value) }}
                  />
                </FormGroup>
                <Button>Pesquisar</Button>
              </Form >
            </Col>
          </Row>
        </Container> */}


        {
          this.state.characters.length > 0 &&
          <div className="container pb-5">
            <div className="row mt-5">
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[0].thumbnail.path}.${this.state.characters[0].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[0].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[1].thumbnail.path}.${this.state.characters[1].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[1].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[2].thumbnail.path}.${this.state.characters[2].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[2].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[3].thumbnail.path}.${this.state.characters[3].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[3].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[4].thumbnail.path}.${this.state.characters[4].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[4].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[5].thumbnail.path}.${this.state.characters[5].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[5].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[6].thumbnail.path}.${this.state.characters[6].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[6].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[7].thumbnail.path}.${this.state.characters[7].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[7].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[8].thumbnail.path}.${this.state.characters[8].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[8].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[9].thumbnail.path}.${this.state.characters[9].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[9].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[10].thumbnail.path}.${this.state.characters[10].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[10].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[11].thumbnail.path}.${this.state.characters[11].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[11].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[12].thumbnail.path}.${this.state.characters[12].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[12].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[13].thumbnail.path}.${this.state.characters[13].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[13].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[14].thumbnail.path}.${this.state.characters[14].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[14].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[15].thumbnail.path}.${this.state.characters[15].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[15].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[16].thumbnail.path}.${this.state.characters[16].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[16].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[17].thumbnail.path}.${this.state.characters[17].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[17].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[18].thumbnail.path}.${this.state.characters[18].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[18].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">

                <div className="card">
                  <img src={`${this.state.characters[19].thumbnail.path}.${this.state.characters[19].thumbnail.extension}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.characters[19].name}</h5>
                    <a href="#" className="btn btn-primary">Conhecer</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        }
      </div >
    );
  }
}
