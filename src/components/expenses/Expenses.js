import { useState } from "react";
import Card from "./../helper/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // props.onFilterByYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesChart filteredExpenses={filteredExpenses}></ExpensesChart>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredYearChangeHandler}
      ></ExpensesFilter>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;
