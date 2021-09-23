import axios from 'axios';
import * as actions from '../constants'
export const fetchCountries = () => async (dispatch) => {
	dispatch({ type: actions.FETCH_COUNTRY_REQUEST });


	try {
		const data = await axios.get("https://restcountries.com/v3/all");
		dispatch({ type: actions.FETCH_COUNTRY_SUCCESS, payload: data.data });
	} catch (error) {
		dispatch({ type: actions.FETCH_COUNTRY_FAILED, payload: error.message });
		console.log(error.message);
	}
};


export const searchCountry = (query) => (dispatch) => {
	dispatch({ type: actions.SEARCH_COUNTRY, payload: query });
};
