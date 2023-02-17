import * as types from '../actions/actionTypes';
import { loadFavImgApi } from '../api/userApi';
const initialState = {
    getfavImages: {
        favimages: {},
        jewimages:{},
        proimages:{},
        loading: false,
        activeitem:null,
        selected_cat:null
    },
};

const loadFavImgReducer = ( state = initialState.getfavImages, action)=>{
    console.log(action.type)
    switch (action.type) {
        case types.GET_FAV_IMAGES_START:
            return {
                ...state,
                loading: true
            };
        case types.GET_FAV_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                favimages: action.payload
            };
        case types.GET_FAV_IMAGES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        //     case types.GET_CAT_IMAGES_START:
        //     return {
        //         ...state,
        //         loading: true
        //     };
        // case types.GET_CAT_IMAGES_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         catimages: action.payload
        //     };
        // case types.GET_CAT_IMAGES_ERROR:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload
        //     };
        case types.GET_JEW_IMAGES_START:
            return {
                ...state,
                loading: true
            };
        case types.GET_JEW_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                jewimages: action.payload
            };
        case types.GET_JEW_IMAGES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            case types.GET_PRO_IMAGES_START:
            return {
                ...state,
                loading: true
            };
        case types.GET_PRO_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                proimages: action.payload
            };
        case types.GET_PRO_IMAGES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            case types.SET_ACTIVE_ITEM:
            return {
                ...state,
                activeitem: action.payload
            };
        case types.SELECTED_CATEGORY:
            return {
                ...state,
                selected_cat : action.payload
            };
        default:
            return state;
 }
};
export default loadFavImgReducer;