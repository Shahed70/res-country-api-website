import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from './Loader'

const SingleCountry = () => {
    const [country, setCountry] = useState()
    console.log(country);

    const { name } = useParams()

    const getSingleCountry = async () => {
        let res = await axios.get(`https://restcountries.com/v3/name/${name}`)
        setCountry(res.data)
    }

    useEffect(() => {
        getSingleCountry()
    }, [])

    return (
        <>
          <h1 className="display-4 text-center mt-5 ">Country Detail</h1>
            {!country ? <Loader /> :
                <div className="row mt-5 pt-5">
                  
                    <div className="col-md-12 d-flex flex-column flex-md-row justify-content-center rounded bg-dark text-light p-5">

                        <div className="flag-box mr-5 ">

                            <img className="img-fluid" src={country[0].flags[1]} alt="" />
                        </div>
                        <div className="country-details mt-5 mt-md-0">
                            <h1 className="mb-4">Name: {country[0].name.common}</h1>
                            <h5>Capital: {country[0].capital[0]}</h5>
                            <h5>Region: {country[0].region}</h5>
                            <h5>Subregion: {country[0].subregion}</h5>
                            <h5>Latitude: {country[0].latlng[0]}</h5>
                            <h5>Longitude: {country[0].latlng[1]}</h5>
                            <h5>Area: {country[0].area} squar kilometer</h5>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default SingleCountry
