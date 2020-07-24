import jsonPlaceHolder from  '../apis/jsonPlaceHolder';

// use redux thunk and define a function that return another function
export const fetchPost = ()=> async dispatch=>{
    const response = await jsonPlaceHolder.get('posts');
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
    })
};