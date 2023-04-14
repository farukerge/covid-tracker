import React from 'react'
import {useSelector} from  "react-redux"
import { Bar } from 'react-chartjs-2'
import {Chart, ArcElement,  LineElement,  BarElement,  PointElement,  BarController,  BubbleController,  DoughnutController,
    LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale,
    RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip
  } from 'chart.js';
  
  Chart.register(
     ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController,
    PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale,
    TimeScale,TimeSeriesScale, Decimation, Filler, Legend,  Title,  Tooltip
  );
const BarChart = () => {
  const {countryData, selectedCountry} = useSelector((state) => state.covidData)

  const chartDatas = [
    {
      status: "Infected",
      value: countryData.Confirmed,
    },
    {
      status: "Recovered",
      value: countryData.Recovered,
    },
    {
      status: "Deaths",
      value: countryData.Deaths,
    },
    {
      status: "Active",
      value: countryData.Active,
    },
  ];


  return (
    <div className='w-2/3 mx-auto p-8'>
      {selectedCountry && <Bar  data={{
          labels: chartDatas.map((item) => item.status),
          datasets: [
            {
              label: "COVID-19",
              data: chartDatas.map((item) => (item.value)),
              backgroundColor: [
                "#b1d7fe",
                "#b2dfdb",
                "#f8bbd0",
                "#ffecb3",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 1,
            },
          ],
        }} /> }
    </div>
  )
}

export default BarChart