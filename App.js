import React from 'react'
import ListItem from './src/components/list-item/ListItem'
import PlaceForm from './src/components/place-form/PlaceForm'
import styled from 'styled-components'

const StyledView = styled.View`
flex: 1;
justify-content: flex-start;
align-items: center;
background: #9cf;
padding-left: 5%;
padding-right: 5%;
`

const ListContainer = styled.View`
width: 100%;
justify-content: flex-start;
align-items: center;
margin-top: 10px;
`

export default class App extends React.Component {

  state = {
    places: []
  }

  onPlaceAdd = (placeName) => {
    this.setState(prevState => {
      return {places: prevState.places.concat(placeName)}
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={`${place}_${i}`} placeName={place} />
    ))
    return (
      <StyledView>
        <PlaceForm onPlaceAdd={this.onPlaceAdd} />
        {
          this.state.places.length > 0 && <ListContainer>{placesOutput}</ListContainer>
        }
      </StyledView>
    );
  }
}



