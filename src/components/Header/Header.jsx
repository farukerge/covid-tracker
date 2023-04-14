import React, { useEffect, useState } from 'react'
import { fetchCountries, setSelectCountry } from '../../features/covidDataSlice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {

  const countries = useSelector((state) => state.covidData.countries)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries())
  },[])


  return (
    <div className='flex flex-col justify-center text-center w-full pt-8'>
      <div>
          <h1 className='text-4xl pb-5 font-bold'>Global and Country Wise Cases of Corona Virus</h1>
          <h2>(for a Particular select a Country from below)</h2>
      </div>
        <div className='p-4'>   
          <select
            className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 w-64 "
            onChange={(e) => dispatch(setSelectCountry(e.target.value))}>
            <option value="">Select a country</option>
              {countries.map(country => (
                <option key={country.ISO2} value={country.Slug}>
                  {country.Country}
                </option>
             ))}
          </select>
        </div>
    </div>
  )
}

export default Header
