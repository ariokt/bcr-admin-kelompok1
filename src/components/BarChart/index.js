import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';



const BarCharts = (props) => {
  const {data} = props;
  
  return (
    <div>
      <BarChart
        width={1150 }
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" label={{ value: 'Date', position: 'insideBottom', offset: "-20"}}/>
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" label={{ value: 'Amount of Car Rented', angle: -90, position: 'insideLeft'}}/>
        <Tooltip />
        <Bar yAxisId="left" dataKey="orderCount" fill="#8884d8" />
      </BarChart>
    </div>
  )
}

export default BarCharts