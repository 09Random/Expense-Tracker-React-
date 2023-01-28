import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";
import { useState } from "react";
import TitleBar from "./components/TitleBar/TitleBar";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TeleVison",
      amount: 799.49,
      date: new Date(2020, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const addNewExpenseHandler = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };
  // const filterExpensesHandler = (selectedYear) => {
  //   setExpenses((prev) => {
  //     let filteredExpenses = [];
  //     prev.forEach((el) => {
  //       console.log(el.date.getFullYear().toString);
  //       if (el.date.getFullYear().toString() == selectedYear) {
  //         filteredExpenses.push(el);
  //       }
  //     });
  //     console.log(filteredExpenses);
  //     return filteredExpenses;
  //   });
  // };
  return (
    <div>
      <TitleBar />
      <Expenses
        items={expenses}
        // onFilterByYear={filterExpensesHandler}
      ></Expenses>
      <NewExpense onAddNewExpense={addNewExpenseHandler}></NewExpense>
    </div>
  );
}

export default App;
