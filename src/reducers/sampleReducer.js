import * as types from '../actions/actionTypes';
import { loadFavImgApi } from '../api/userApi';
const initialState = {
    user:{name:"hariii"}
};

const userReducer = (state = initialState, action)=>{
    // console.log("..........",action)
    switch (action.type) {
        case types.GET_USER_DATA:
            return state.user
        case types.POST_USER_DATA:
            state.user = action.payload

        default:
            return state;
 }
};
export default userReducer;