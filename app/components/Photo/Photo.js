import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'

require('./style.scss')

function Photo (props) {
  const { title, thumbnailUrl } = props.photo
  return (
    <Col md={2}>
      <div className="photo-card">
        <div className="image">
          <img src={thumbnailUrl} alt="image" className="img-fluid img-rounded" />
        </div>
        <div className="card-wrapper">
          <div className="card-title">
            <h6>{title}</h6>
          </div>
        </div>
      </div>
    </Col>
  )
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
}

export default Photo
