import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class FormMarvel extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <Form inline onSubmit={this.props.onSubmit}>
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
                  id="search"
                  onChange={(value) => { console.log(value) }}
                />
              </FormGroup>
              <Button>Pesquisar</Button>
            </Form >
          </Col>
        </Row>
      </Container>
    );
  }
}