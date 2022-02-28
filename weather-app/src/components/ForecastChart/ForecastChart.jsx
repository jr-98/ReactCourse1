import React from 'react';
import PropTypes from 'prop-types';
import {
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ComposedChart,
    Bar,
    ResponsiveContainer,
} from 'recharts';
const ForecastChart = ({ data }) => {
    return (
        <ResponsiveContainer width="95%" height={300} >
            <ComposedChart
                layout="horizontal"
                margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
                data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dayHour" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey="max" stroke="#8884d8" strokeWidth={3} />
                <Bar dataKey="max" barSize={20} fill="#8884d8" />
                <Line type='monotone' dataKey="min" stroke="#82ca9d" strokeWidth={3} />
                <Bar dataKey="min" barSize={20} fill="#82ca9d" />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.shape({
        dayHour: PropTypes.string.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    }).isRequired
}
export default ForecastChart