import axios from 'axios';

const initialState = {
  features: []
};

// --------------------- CONSTANTS ---------------------
const ADD_FEATURE_OBJ = 'ADD_FEATURE_OBJ';


// --------------------- ACTION CREATERS ---------------------
export const addFeatureObj = (featureObj) => ({
  type: ADD_FEATURE_OBJ, 
  feature: featureObj
});


// --------------------- THUNKS ---------------------
// TODO: FINISH
export const addFeature = (content) => 
  dispatch => 
    axios.post('api/features', {content})
    .then((statusObj) => {
      if (statusObj.status === 200) {
        const featureObj = {
          headerText: 'Requested Feature', 
          contentText: content, 
          faIconClass: 'fa-taxi'
        }

        dispatch(addFeatureObj(feature));
      }
    });
//     .catch((errObj) => {
//       let errorMessage = errObj.response.data.errorMessage;

//       dispatch(updateErrorMessage(errorMessage));
//       dispatch(updateSubscribedStatus(false));
//     });


// --------------------- REDUCER ---------------------
export default (state=initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_FEATURE_OBJ:
      newState.features = [action.feature, ...newState.features];
      break;
    default:
      return state;
  }

  return newState;
}
