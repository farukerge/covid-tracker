import React,{ useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountryData } from '../../features/covidDataSlice'
import BarChart from '../../components/Chart/BarChart'
import Spinner from 'react-spinner-material'


const Homepage = () => {
  const [dataArr, setDataArr] = useState([])
  const dispatch = useDispatch()
  const {selectedCountry, countryData, status } = useSelector((state) => state.covidData)
  

  

  useEffect(() => {
    if (selectedCountry !== null) {
    dispatch(fetchCountryData(selectedCountry));
    }
    }, [dispatch, selectedCountry]);
    

    useEffect(() => {
      countryData ? setDataArr([
        {
          status: 'Infected',
          value: countryData.Confirmed,
          date: countryData.Date,
          code: countryData.CountryCode,
        },
        
        {
          status: 'Recovered',
          value: countryData.Recovered,
          date: countryData.Date,
          code: countryData.CountryCode,
        },
        {
          status: 'Active',
          value: countryData.Active,
          date: countryData.Date,
          code: countryData.CountryCode,
        },
        {
          status: 'Deaths',
          value: countryData.Deaths,
          date: countryData.Date,
          code: countryData.CountryCode,
        },
      ]) : setDataArr([]);
    }, [countryData, selectedCountry]);
  
  return (
    <main className='h-screen w-full  '>
      <Header />
        <div className="flex  mx-auto gap-10 w-2/3 pt-10 ">
               {status === 'loading' ? (
          <div className=' w-full justify-center flex'>
            <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
          </div>
          ) : status === 'failed' ? (
            <h1>fail</h1>
          ) : dataArr.length > 0 ? (
              <div className='flex flex-col'>
                <div className='flex gap-10'>
                  {dataArr.map((data, index) => (
                    <Card data={data} key={index} />
                  ))}
                </div>
              <BarChart/>   
            </div>
          ) : (
            <div className="flex justify-center  text-center text-red-400 w-full">
              No data available
            </div>
          )}
        </div>    
    </main>
  )
}

export default Homepage