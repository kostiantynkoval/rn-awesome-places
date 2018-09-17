import React from 'react'
import ListContainer from './src/components/list-container/ListContainer'
import PlaceForm from './src/components/place-form/PlaceForm'
import PlaceDetail from './src/components/place-detail/PlaceDetail'
import styled from 'styled-components'
import Image from './src/assets/disney.jpg'

const StyledView = styled.View`
flex: 1;
justify-content: flex-start;
align-items: center;
background: #9cf;
padding-left: 5%;
padding-right: 5%;
`

export default class App extends React.Component {

  state = {
    places: [],
    selectedPlace: null
  }

  onPlaceAdd = (placeName) => {
    this.setState(prevState => {
      const key = `${placeName}_${Math.ceil(Math.random() * (9999 - 1000) + 1000)}`;
      return {
        places: prevState.places.concat({
          placeName,
          key,
          image: {
            uri: 'https://res.cloudinary.com/demo/image/fetch/https://upload.wikimedia.org/wikipedia/commons/d/db/Scarlett_Johansson_2003.jpg'
          }
        })
      }
    })
  }

  onPlaceSelected = (item) => {
    this.setState({ selectedPlace: item })
  }

  onClose = () => {
    console.log('onClose called')
    this.setState({ selectedPlace: null })
  }

  render() {
    return (
      <StyledView>
        { console.log('App state', this.state)}
        <PlaceDetail place={this.state.selectedPlace} requestClose={this.onClose} />
        <PlaceForm onPlaceAdd={this.onPlaceAdd} />
        {
          this.state.places.length > 0 &&
          <ListContainer places={this.state.places} onPlaceSelected={this.onPlaceSelected} />
        }
      </StyledView>
    );
  }
}



