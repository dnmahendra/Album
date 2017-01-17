import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as albumActionCreators from '../../redux/modules/photos'
import { Grid, Row, Col } from 'react-bootstrap'
import { PhotoList, Pagination } from '../../components'

export class AlbumContainer extends Component {
  fetchPhotos = (albumId = this.props.albumId) => {
    this.props.fetchPhotos(albumId)
  }
  componentDidMount () {
    this.fetchPhotos()
  }
  render () {
    const { albumId, isFetching, photos } = this.props

    let renderAlbum
    if (isFetching) {
      renderAlbum = (
        <p>LOADING!</p>
      )
    } else {
      renderAlbum = (
        <Col md={12}>
          <Row>
            <h1 className="text-center page-heading">Album - {albumId}</h1>
          </Row>
          <Row>
            <Pagination albumId={albumId} handleClick={this.fetchPhotos} />
          </Row>
          <Row>
            <PhotoList photos={photos} isFetching={isFetching} />
          </Row>
        </Col>
      )
    }
    return (
      <Grid>
        {renderAlbum}
      </Grid>
    )
  }
}

AlbumContainer.defaultProps = {
  albumId: 1,
  isFetching: false,
  photos: [],
}

AlbumContainer.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  albumId: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  photos: PropTypes.array,
}

function mapStateToProps (state) {
  return {
    isFetching: state.isFetching,
    photos: state.photos,
    albumId: state.albumId,
  }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(albumActionCreators, dispatch)
  )(AlbumContainer)
