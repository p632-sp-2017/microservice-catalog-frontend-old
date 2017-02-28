const microServiceFormReducer = ( state={}, action) =>{
  switch (action.type) {
    case "submit":
      return state
      //Make AJAX call here
      break;
    default:
      return state

  }
}

export default microServiceFormReducer
