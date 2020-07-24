import jsonPlaceHolder from  '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostsAndUsers = ()=>async (dispatch,getState) =>{
   await dispatch(fetchPosts()); //await is ony used here if we want to previous api response and process next api
   const userIds = _.uniq(_.map(getState().posts,'userId'));
   userIds.forEach(id=>dispatch(fetchUser(id)));

   //alternative syntax
  /* _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id=>dispatch(fetchUser(id)))
    .value();
    */
    
}

// use redux thunk and define a function that return another function
 const fetchPosts = ()=> async dispatch=>{
    const response = await jsonPlaceHolder.get('posts');
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
    })
};
 const fetchUser = (id)=>async dispatch=>{
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({
        type:'FETCH_USER',
        payload:response.data
    });

};

