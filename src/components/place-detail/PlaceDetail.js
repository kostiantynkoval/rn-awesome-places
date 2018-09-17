import React from 'react';
import styled from 'styled-components'

const StyledModal = styled.Modal.attrs({
  onRequestClose: props => props.onClose,
  visible: props => props.visibility
})`

`

const StyledView = styled.View`
margin-top: 30px;
`

const StyledImage = styled.Image.attrs({
  source: props => props.src
})`
width: 80%;
margin-left: 10%;
height: 400px;
`

const StyledText = styled.Text`

`

const StyledButton = styled.Button.attrs({
  title: props => props.title,
  onPress: props => props.onPress
})`
color: ${props => props.textColor}
`

const PlaceDetail = ({place, requestClose}) => {
  return (
    <StyledModal visibility={ place !== null } onClose={requestClose}>
      <StyledView>
        { place !== null &&  <StyledImage src={place.image}/> }
        { place !== null &&  <StyledText>{place.placeName}</StyledText> }
        <StyledView>
          <StyledButton title="Delete" textColor="red" onPress={requestClose}/>
          <StyledButton title="Close" textColor="black" onPress={()=>{}}/>
        </StyledView>
      </StyledView>
    </StyledModal>
  );
};

export default PlaceDetail;
