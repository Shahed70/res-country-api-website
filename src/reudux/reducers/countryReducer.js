import * as actionType from '../constants'

const initialState = {
    loading:false,
	countries: [],
	searchResults: [],
};



export const countryReducer = (state = initialState, action) => {
   
	switch (action.type) {
		case actionType.FETCH_COUNTRY_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionType.FETCH_COUNTRY_SUCCESS:
			return {
				...state,
				loading: false,
				countries: action.payload,
				searchResults: action.payload,
			};
		case actionType.FETCH_COUNTRY_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case actionType.SORT_COUNTRY_ASC:
			const sortAsc = action.payload.sort((a, b) => (a.title < b.title ? 1 : a.title > b.title ? -1 : 0));
			return {
				...state,
				posts: sortAsc,
			};
		case actionType.SORT_COUNTRY_DESC:
			const sortDesc = action.payload.sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));
			return {
				...state,
				posts: sortDesc,
			};
		case actionType.SEARCH_COUNTRY:
		
			return {
				...state,
				countries: state.searchResults.filter((country) =>
				country.name.common.toLowerCase().includes(action.payload.toLowerCase()),
				console.log(action.payload)
				),
			};
		default:
			return state;
	}
};