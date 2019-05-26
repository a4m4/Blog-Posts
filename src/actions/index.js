import jsonPlaceholder from '../apisjsonPlaceholder';
import { async } from 'q';


export const fetchPosts = () => {

    return async (dispatch) => {

        const response = await jsonPlaceholder.get('./posts');
        dispatch({   type: 'FETCH_POSTS', payload: response})

    };
};