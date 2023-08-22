import React from 'react';
import "./Chart.css";
import ChartBar from './ChartBar';

function Chart(props4){
    const dataPointValue =props4.dataPoints;
    const dataPointValues =dataPointValue.map((dataPoint) =>  dataPoint.value);// Returns an Array
    const totalMaximum =Math.max(...dataPointValues);
    return(
        <div className='chart'>
            {dataPointValue.map((dataPoint)=>{
                return(<ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />);
                
    })}
        </div>
    );
}

export default Chart;