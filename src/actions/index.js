import _, { memoize } from "lodash";
import jsonapi from "../api/jsonplaceholder";

export const FetchPost = () =>  async dispatch=>{
        const response =  await jsonapi.get('/posts');
        dispatch( {
            type:"FETCH_POST",
            payload:response.data
        });
}

export const  FetchUser = (id) =>   dispatch=>{
    _FetchUser(id,dispatch);
};


const _FetchUser = _.memoize( async (id,dispatch) =>{
    const response =  await jsonapi.get(`/users/${id}`);
    
    dispatch( {
        type:"FETCH_USER",
        payload:response.data
    });
});