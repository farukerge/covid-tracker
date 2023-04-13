import React,{useEffect, useState} from 'react'
import { fetchCountries, selectCountry, fetchCountryData} from '../../features/covidDataSlice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
   
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.covidData.countries)
    const selectedCountry = useSelector((state) => state.covidData.country)
   
  
    useEffect(() => {
        dispatch(fetchCountries())
    }, []);
    useEffect(()=>{
    dispatch(fetchCountryData(selectedCountry))
  },[dispatch,selectedCountry])


    const handleChangeCountry = (e) =>{
    dispatch(selectCountry(e.target.value))
  }


  return (
    <div className='flex flex-col justify-center text-center p-10'>
          <h1 className='text-4xl pb-5'>Global and Country Wise Cases of Corona Virus</h1>
          <h2>(for a Particular select a Country from below)</h2>
          <select
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option >{selectedCountry ? selectedCountry : "WorldWide"}</option>
              {countries && countries.map((item, id) => (
                  <option key={id} onClick={() => { dispatch(fetchCountryData(item.Country)); dispatch(selectedCountry(item.Country))}}>{ item.Country }</option>
              ))}
          </select>
    </div>
  )
}

export default Header


//  <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
//                 <option>ReactJS Dropdown</option>
//               </select>