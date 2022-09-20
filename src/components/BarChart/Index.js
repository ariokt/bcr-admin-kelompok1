import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const BarCharts = (props) => {
  const {data} = props;
  const data2 = [
    {
      name: 'Page A',
      uv: 4000,
    },
    {
      name: 'Page B',
      uv: 3000,

    },]
  console.log(data)
  return (
    <div>
      <BarChart
        width={1500}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="summary" fill="#8884d8" />
      </BarChart>
    </div>
  )
}

export default BarCharts
