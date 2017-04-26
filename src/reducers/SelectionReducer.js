//if state is undefined return null - ES6
export default (state = null, action) => {
  //console.log(action);
  //return null;
  switch (action.type) {
    case 'select_library':
      return action.payload; //return library ID
    default:
      return state; //return last known state
  }
};
