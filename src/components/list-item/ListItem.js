import React from 'react';
import styled from 'styled-components'
import { Image } from 'react-native'

const ListItemContainer = styled.View`
width: 100%;
padding: 10px;
background: #eeeeee;
border: 1px solid #666666;
border-radius: 2px;
margin-bottom: 5px;
flex-direction: row;
align-items: center;
`

const StyledImage = styled.Image.attrs({
  source: props => props.src
})`
margin-right: 8px;
width: 30px;
height: 30px;
`

const StyledTouchable = styled.TouchableOpacity.attrs({
  onPress: props => props.pressed
})`
width: 100%;
`

const StyledText = styled.Text`
color: #8b0000;
`

const ListItem = ({place, onItemPressed}) => {

  return (
    <StyledTouchable pressed={() => onItemPressed(place)}>
      <ListItemContainer>
        <StyledImage src={place.image} />
        <StyledText>{place.placeName}</StyledText>
      </ListItemContainer>
    </StyledTouchable>
  );
};

export default ListItem;
