import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../reudux/actions/CountryAction";


const SearchBar = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('');

    const handleSearchCountry = e => {
        e.preventDefault()
        dispatch(searchCountry(search));
    }

    return (
        <>
            <div className="row" style={{marginTop:"100px"}}>
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center mb-5">Search Your Country</h1>
                    <form className="my-2 my-lg-0 text-center" onSubmit={ handleSearchCountry}>
                        <div className="d-flex">
                            <input className="form-control" 
                            value={search} type="search"
                            onChange={e => setSearch( e.target.value)}
                            placeholder="Search" />
                            <button className="btn btn-outline-success  my-sm-0" type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchBar
