import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Jumbotron, Row, Button } from 'react-bootstrap'

require('./style.scss')

class Home extends Component {
  render () {

    return (
      <Grid className="home-page">
        <Jumbotron className="jumbo">
          <Row className="text-center">
            <h1>Photo Album</h1>
            <p className="lead">Your personalised photo album</p>
          </Row>
          <Row className="text-center">
            <Link to="/albums">
              <Button className="btn btn-success btn-album" type="submit">
                Explore The Album
              </Button>
            </Link>
          </Row>
        </Jumbotron>
      </Grid>
    )
  }
}

export default Home
