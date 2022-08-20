import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


export default function Chart() {
    const data = [
        {
          name: 'Jan',
          "Active user": 4000,
        },
        {
          name: 'Feb',
          "Active user": 3000,
        },
        {
          name: 'Mar',
          "Active user": 2000,
        },
        {
          name: 'Apr',
          "Active user": 2780,
        },
        {
          name: 'May',
          "Active user": 1890,
        },
        {
          name: 'Jun',
          "Active user": 2340,
        },
        {
          name: 'Jul',
          "Active user": 2490,
        },
        {
            name: 'Agu',
            "Active user": 3410,
        },
        {
            name: 'Sep',
            "Active user": 1492,
        },
        {
            name: 'Oct',
            "Active user": 3950,
        },
        {
            name: 'Nov',
            "Active user": 5510,
        },
        {
            name: 'Dec',
            "Active user": 2140,
        }
      ];
      
    return (
        <div className='chart'>
            <h3 className="chartTitle">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey="Active user" stroke="#5550bd" />
                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}
