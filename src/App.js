import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip
} from "recharts";

function LineRechartComponent() {
const [covidData, setCovidData] = useState(null);

useEffect(()=>{
  fetchData(); 
}, [])

const fetchData = async() => {
  let res = await (await axios.get('https://api.covid19india.org/data.json')).data.statewise
  setCovidData(res)
}
console.log('covidData', covidData)
const maxYaxis = () => {
  const max = 0;
  covidData.filter((ins)=>{
    if(ins.recovered > max){
      max = ins.recovered;
    }
  })
  return max
}

return(

  <LineChart
    width={750}
    height={750}
    data={covidData}
    margin={{ top: 5, right: 30, left: 20, bottom: 5}}
  >
  <CartesianGrid strockDasharray="3 3" />
  <XAxis dataKey="lastupdatedtime" />
  <YAxis type="number" domain={['auto', 'auto']}/>
  <Tooltip />
  <Legend />
  <Line type='monotone' dataKey='recovered' stroke='#8884d8' activeDot={{ r:8 }}/>
  <Line type='monotone' dataKey='deaths' stroke='#82ca9d' />
  </LineChart>

);
}
export default LineRechartComponent