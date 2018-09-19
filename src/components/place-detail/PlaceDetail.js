import React from 'react';
import styled from 'styled-components'

const StyledModal = styled.Modal.attrs({
  onRequestClose: props => props.onClose,
  visible: props => props.visibility,
  animationType: "slide"
})`

`

const StyledView = styled.View`
margin-top: 30px;
margin-left: 10%;
width: 80%;
`

const ButtonView = styled.View`
margin-top: 12px;
`

const StyledImage = styled.Image.attrs({
  source: props => props.source
})`
width: 100%;
height: 400px;
`

const StyledText = styled.Text`
text-align: center;
font-weight: bold;
font-size: 24px;
line-height: 24px;
margin-top: 8px;
`

const StyledButton = styled.Button.attrs({
  title: props => props.title,
  onPress: props => props.onPress,
  color: props => props.textColor ? props.textColor : 'navy'
})`
margin-bottom: 8px;
`

const PlaceDetail = ({place, requestClose, requestDelete}) => (
  <StyledModal visibility={ place !== null } onClose={requestClose}>
    <StyledView>
      { place !== null &&  <StyledImage source={place.image}/> }
      { place !== null &&  <StyledText>{place.placeName}</StyledText> }
      <ButtonView>
        <StyledButton title="Delete" textColor="red" onPress={requestDelete}/>
        <StyledButton title="Close" onPress={requestClose}/>
      </ButtonView>
    </StyledView>
  </StyledModal>
);

export default PlaceDetail;
