"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function BurndownChart() {
  const data = [
    { day: '1', ideal: 100, actual: 95 },
    { day: '2', ideal: 90, actual: 90 },
    { day: '3', ideal: 80, actual: 85 },
    { day: '4', ideal: 70, actual: 75 },
    { day: '5', ideal: 60, actual: 65 },
    { day: '6', ideal: 50, actual: 60 },
    { day: '7', ideal: 40, actual: 50 },
    { day: '8', ideal: 30, actual: 40 },
    { day: '9', ideal: 20, actual: 30 },
    { day: '10', ideal: 10, actual: 15 },
  ]

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ideal" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

