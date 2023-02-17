import * as types from './actionTypes';

//get fav images 
export const loadFavImgsStart = () => ({

    type: types.GET_FAV_IMAGES_START,
});
export const loadFavImgsSuccess = (data) => {
return({
        type: types.GET_FAV_IMAGES_SUCCESS,
        payload: data,
    })
}
export const loadFavImgsError = (error) => ({
    type: types.GET_FAV_IMAGES_ERROR,
    payload: error,
});

// export const loadCatImgsStart = () => ({

//     type: types.GET_CAT_IMAGES_START,
// });

// export const loadCatImgsSuccess = (data) => {
//     // console.log(">>>>>>>>>>>>>>>",data);
//     return({
//             type: types.GET_CAT_IMAGES_SUCCESS,
//             payload: data,

//         })
//     }
//     export const loadCatImgsError = (error) => ({
//         type: types.GET_CAT_IMAGES_ERROR,
//         payload: error,
//     });

export const loadJewImgsStart = () => ({

    type: types.GET_JEW_IMAGES_START,
});

export const loadJewImgsSuccess = (data) => {
    console.log(">>>>>>>>>>>>>>>",data);
    return({
            type: types.GET_JEW_IMAGES_SUCCESS,
            payload: data,

        })
    }
    export const loadJewImgsError = (error) => ({
        type: types.GET_JEW_IMAGES_ERROR,
        payload: error,
    });



    export const loadProImgsStart = () => ({

        type: types.GET_PRO_IMAGES_START,
    });
    
    export const loadProImgsSuccess = (data) => {
        // console.log(">>>>>>>>>>>>>>>",data);
        return({
                type: types.GET_PRO_IMAGES_SUCCESS,
                payload: data,
    
            })
        }
        export const loadProImgsError = (error) => ({
            type: types.GET_PRO_IMAGES_ERROR,
            payload: error,
        });

        export const activeitem = (data) => ({
            type: types.SET_ACTIVE_ITEM,
            payload:data,
        });

export const postUser = (data) => ({
    type: types.POST_USER_DATA,
    payload:data
});


export const getUser = () => ({
    type: types.GET_USER_DATA
});

export const selecteditem = (data) => ({
    type: types.SELECTED_CATEGORY,
    payload:data

});


