import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((el) => (
        // console.log(props.maxValue)
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={props.maxValue}
          label={el.label}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
