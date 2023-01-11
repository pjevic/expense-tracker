import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointvalues = props.items.map((item) => item.value);
  const totalMax = Math.max(...dataPointvalues);

  return (
    <div className="chart">
      {props.items.map(({ value, label }) => (
        <ChartBar key={label} value={value} maxValue={totalMax} label={label} />
      ))}
    </div>
  );
};

export default Chart;
