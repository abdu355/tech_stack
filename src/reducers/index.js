import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  //libraries key , LibraryReducer assigned to key
  //LibraryReducer returns an empty array
  //app state will have a key of libraries containing the list of data
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
  //how to use --> state.libraries
  //state.selectedLibraryId
});
