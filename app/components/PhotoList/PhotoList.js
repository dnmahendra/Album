import React, {PropTypes} from 'react'
import Photo from '../Photo/Photo'
import { Grid, Col, Row } from 'react-bootstrap'

function PhotoList (props) {
  return (
    <Grid>
      <Row>
        {props.isFetching === true
        ? <p>LOADING..</p>
        : <Col md={12}>
          {props.photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
            ))}
        </Col>}
      </Row>
    </Grid>
  )
}

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default PhotoList
