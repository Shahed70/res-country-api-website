import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../reudux/actions/CountryAction';
import CountryCard from './CountryCard';
import Loader from './Loader';
import Paginate from './Paginate';
import SearchBar from './SearchBar';

const Countries = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const {loading, countries, searchResults} = useSelector((state) => state.countryReducer);

	console.log(searchResults);


    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);


	const countrypPerPage = 25;
	const totalCountries = countries.length;

	const indexOfLastcountry = currentPage * countrypPerPage;
	const indexOfFirstCountry = indexOfLastcountry - countrypPerPage;
	const filterCountry = countries.slice(indexOfFirstCountry, indexOfLastcountry);
    return (
        <>
		<SearchBar/>
	{loading ? (
				<Loader />
			) : (
				<div className="container mt-5 pt-5">
					<div className="countries">
						{filterCountry.map((country, index) => (
							<CountryCard key={index} country={country} contryClass="myclass"/>
						))}
					</div>
					{totalCountries > countrypPerPage && (
						<Paginate
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalCountries={totalCountries}
							countrypPerPage={countrypPerPage}
						/>
					)}
				</div>
			)}
        </>
    )
}

export default Countries
