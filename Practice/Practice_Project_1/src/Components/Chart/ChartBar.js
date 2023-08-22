import React from "react";
import "./ChartBar.css";

function ChartBar(props5) {
    let barFillHeight = "0%";

    if (props5.maxValue > 0){
        barFillHeight = Math.round((props5.value / props5.maxValue)*100) + "%";
    }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props5.label}</div>
    </div>
  );
}

export default ChartBar;
