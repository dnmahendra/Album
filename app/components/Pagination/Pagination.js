import React, { PropTypes, Component } from 'react'
import { Row, Pager } from 'react-bootstrap'

class Pagination extends Component {
  handlePreviousSelect = () => {
    const prevAlbumId = this.props.albumId - 1
    this.props.handleClick(prevAlbumId)
  }
  handleNextSelect = () => {
    const nextAlbumId = this.props.albumId + 1
    this.props.handleClick(nextAlbumId)
  }
  render () {
    const { albumId } = this.props
    let renderLinks

    if (albumId === 1) {
      renderLinks = (
        <Pager.Item href="#" onSelect={this.handleNextSelect}>Next Album &rarr;</Pager.Item>
      )
    } else if (albumId === 100) {
      renderLinks = (
        <Pager.Item href="#" onSelect={this.handlePreviousSelect}>&larr; Previous Album</Pager.Item>
      )
    } else {
      renderLinks = (
        <div>
          <Pager.Item href="#" onSelect={this.handlePreviousSelect}>&larr; Previous Album</Pager.Item>
          <Pager.Item href="#" onSelect={this.handleNextSelect}>Next Album &rarr;</Pager.Item>
        </div>
      )
    }

    return (
      <Row>
        <Pager className="paginate">
          {renderLinks}
        </Pager>
      </Row>
    )
  }
}

Pagination.propTypes = {
  handleClick: PropTypes.func.isRequired,
  albumId: PropTypes.number,
}

export default Pagination
