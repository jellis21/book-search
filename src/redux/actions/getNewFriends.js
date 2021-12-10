import * as types from '../actionTypes';

const addNewFriend = friend => dispatch => {
  dispatch({
    type: types.GET_NEW_FRIENDS,
    friend
  })
}

export default addNewFriend;