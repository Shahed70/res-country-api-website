import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country, contryClass}) => {
    const { name} = country
    return (
        <>

            <div className={`country border p-4 text-center`}>
                <h4 className="pb-5">{name?.common}</h4>
                <img className="img-fluid" src={country?.flags[1]} alt="" />
                <div className="mt-3">
                    <Link to={`/${name?.common}`} className="btn  btn-outline-success btn-block">Learn More</Link>
                </div>
            </div>

        </>
    )
}

export default CountryCard
