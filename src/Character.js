import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import characters from './mock';

export default class Character extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="jumbotron" style={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <img src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png" style={{ width: 200 }} />
          </div>
        </div>
        <Container>
          <Row>
            <Col md={6}>
              <img src={`${characters[0].thumbnail.path}.${characters[0].thumbnail.extension}`} alt="..." style={{width: 'inherit'}}/>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <h5>Quadrinhos</h5>
                  <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h5>Séries</h5>
                  <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h5>Histórias</h5>
                  <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h5>Eventos</h5>
                  <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
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
