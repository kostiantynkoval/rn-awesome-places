import React from 'react';
import styled from 'styled-components'

const ListItemContainer = styled.View`
width: 100%;
padding: 10px;
background: #eeeeee;
border: 1px solid #666666;
border-radius: 2px;
margin-bottom: 5px;
`

const StyledText = styled.Text`
color: #8b0000;
`

const ListItem = ({placeName}) => {
  return (
    <ListItemContainer>
      <StyledText>{placeName}</StyledText>
    </ListItemContainer>
  );
};

export default ListItem;
