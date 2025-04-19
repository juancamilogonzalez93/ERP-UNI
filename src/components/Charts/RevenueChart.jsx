import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { month: 'Ene', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
];

export default function RevenueChart() {
  return (
    <BarChart width={600} height={300} data={data}>
      <Bar dataKey="revenue" fill="#8884d8" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </BarChart>
  );
}