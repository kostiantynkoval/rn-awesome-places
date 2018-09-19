import React from 'react'
import ListContainer from '../../../src/components/list-container/ListContainer'
import PlaceForm from '../../../src/components/place-form/PlaceForm'
import PlaceDetail from '../../../src/components/place-detail/PlaceDetail'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addPlace, deletePlace, selectPlace, deselectPlace } from '../../../store/actions'

const StyledView = styled.View`
flex: 1;
justify-content: flex-start;
align-items: center;
background: #6bf;
padding-left: 5%;
padding-right: 5%;
`

class Parent extends React.Component {

  onPlaceAdd = (placeName) => {
    this.props.addPlace(placeName)
  }

  onPlaceSelected = (item) => {
    this.props.selectPlace(item)
  }

  onClose = () => {
    this.props.deselectPlace()
  }

  onDelete = () => {
    this.props.deletePlace()
  }

  componentWillUnmount() {
    console.log('APP unmounted')
  }

  render() {
    return (
      <StyledView>
        <PlaceDetail place={this.props.selectedPlace} requestClose={this.onClose} requestDelete={this.onDelete}/>
        <PlaceForm onPlaceAdd={this.onPlaceAdd} />
        {
          this.props.places.length > 0 &&
          <ListContainer places={this.props.places} onPlaceSelected={this.onPlaceSelected} />
        }
      </StyledView>
    );
  }
}

export default connect(
  state => ({places: state.places.places, selectedPlace: state.places.selectedPlace}),
  dispatch => ({
    addPlace: placeName => dispatch(addPlace(placeName)),
    deletePlace: () => dispatch(deletePlace()),
    selectPlace: item => dispatch(selectPlace(item)),
    deselectPlace: () => dispatch(deselectPlace()),
  })
)(Parent)


