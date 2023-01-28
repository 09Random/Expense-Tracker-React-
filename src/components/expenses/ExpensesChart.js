import Chart from "./../Chart/Chart";

const ExpensesChart = (props) => {
  let dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const el of props.filteredExpenses) {
    dataPoints[el.date.getMonth()].value += el.amount;
  }
  const dataPointsValues = dataPoints.map(function (el) {
    return el.value;
  });
  let maxValue = Math.max(0, ...dataPointsValues);
  return <Chart dataPoints={dataPoints} maxValue={maxValue}></Chart>;
};
export default ExpensesChart;
