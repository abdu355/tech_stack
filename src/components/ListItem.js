import React, { Component } from 'react';
import { Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
  Platform } from 'react-native';
  import { connect } from 'react-redux';
  import { CardSection } from './common';
  //call action creators
  //* get all files as 'something' in directory
  import * as actions from '../Actions';

  class ListItem extends Component {
    componentWillUpdate() {
      //call spring animation when component is about to re-render to device
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      LayoutAnimation.spring();
    }
    renderDescription() {
      const { library, expanded } = this.props;

      //if (library.id === selectedLibraryId) {
      if (expanded) {
        return (
          <CardSection>
            <Text style={{ flex: 1, paddingLeft: 15, fontSize: 16, fontWeight: 'bold', color: 'red' }}>
              {library.description}
            </Text>
          </CardSection>
        );
      }
    }
    render() {
      const { titleStyle, cardStyle } = styles;
      const { id, title } = this.props.library;

      return (
        <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
        >
          <View>
            <CardSection>
              <Text style={titleStyle}>
                {title}
              </Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }

  const styles = {
    titleStyle: {
      fontSize: 24,
      paddingLeft: 15,
      color: 'white'
    },
  };
  //connect(map, actions)
  //ownProps = this.props
  const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
    //return { selectedLibraryId: state.selectedLibraryId };
  };
  export default connect(mapStateToProps, actions)(ListItem);
