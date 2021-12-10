import { GET_NEW_FRIENDS } from "../actionTypes";

const initialState = {
  friends: ['Mario', 'Peach', 'Yoshi']
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEW_FRIENDS: {
      return {
        friends: [...state.friends, action.friend]
      }
    }
    default: return state;
  }
}

export default appReducer;