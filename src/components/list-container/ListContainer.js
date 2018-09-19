import React, { Component } from 'react';
import ListItem from '../../components/list-item/ListItem'
import { ScrollView, StyleSheet, FlatList } from 'react-native'
import styled from 'styled-components'

const FlatListStyled = styled.FlatList.attrs({
  data: props => props.places,
  renderItem: props => props.renderItm
})`
margin-top: 10px;
width: 100%
`

class ListContainer extends Component {
  constructor(props) {
    super(props)
  }

  _listItem = (item) => {
    const {onPlaceSelected} = this.props
    return (
      <ListItem place={item} onItemPressed={onPlaceSelected} />
    )
  }

  componentWillUnmount() {
    console.log('ListContainer unmounted')
  }

  render() {
    const {places} = this.props
    return (
      <FlatListStyled
        places={places}
        renderItm={({item}) => this._listItem(item)}
      />
    );
  }
}

export default ListContainer;
