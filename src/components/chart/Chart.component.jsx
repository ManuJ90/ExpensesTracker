import React from 'react';
import './chart.styles.css';
import ChartBar from '../chart-bar/ChartBar.component';

const Chart = (props) => {
	const valueArr = props.dataPoints.map((dataPoint) => dataPoint.value);

	const totalMax = Math.max(...valueArr);

	return (
		<div className='chart'>
			{props.dataPoints.map((data, index) => (
				<ChartBar
					key={index}
					value={data.value}
					maxValue={totalMax}
					label={data.label}
				/>
			))}
		</div>
	);
};

export default Chart;
