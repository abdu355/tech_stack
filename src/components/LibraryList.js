import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    //boilerplate for ListView
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    //get list of libraries from mapStateToProps and clone them to list view datasource
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }
  //tells listview how to render the list
  //sends prop to ListItem containing an individual library
  renderRow(library) {
    return <ListItem library={library} />;
  }
  render() {
    // list of libraries fetched from mapStateToProps
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
//calls connect which returns another function which takes LibraryList as parameter

const mapStateToProps = state => {
  return { libraries: state.libraries }; //libraries is arbitrary
};
//connect reaches to provider, gets state,
//and libraries are added to the state which returns a list of libraries
export default connect(mapStateToProps)(LibraryList);
