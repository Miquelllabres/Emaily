import axios from 'axios';
import { FETCH_USER } from './types';

//once the request has been resolve, we get a response, we distapch an actions containing that response.
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};
