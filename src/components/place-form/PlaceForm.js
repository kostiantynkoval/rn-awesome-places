import React, {Component} from 'react';
import styled from 'styled-components'

const StyledTextInput = styled.TextInput`
width: 70%;
background: #444;
padding: 4px 15px;
color: #add8e6;
margin-right: 5px;
border-radius: 2px;
`

const StyledTextButton = styled.Button`
width: 30%;
margin-left: 5px;
`

const InputContainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 30px;
`

class PlaceForm extends Component {

  state = {
    placeName: '',
  }

  onChange = (val) => {
    this.setState({placeName: val})
  }

  onPressButton = () => {
    if (this.state.placeName.trim() === '' ) {
      return
    }
    this.props.onPlaceAdd(this.state.placeName)
    this.setState({placeName: ''})
  }

  render() {
    return (
      <InputContainer>
        <StyledTextInput
          value={this.state.placeName}
          onChangeText={this.onChange}
          placeholder="An awesome place"
        />
        <StyledTextButton title="Add" onPress={this.onPressButton}/>
      </InputContainer>
    );
  }
}

export default PlaceForm;

