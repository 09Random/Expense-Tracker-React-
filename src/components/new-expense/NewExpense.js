import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const NewExpense = (props) => {
  const saveNewExpenseHandler = (newExpense) => {
    const expense = {
      ...newExpense,
      id: Math.trunc(Math.random() * 100).toString(),
    };
    props.onAddNewExpense(expense);
    setShowForm(false);
  };
  const [showForm, setShowForm] = useState(false);

  const showFormClickhandler = () => {
    setShowForm(true);
  };
  const hideFormHandler = () => {
    setShowForm(false);
  };

  if (showForm === false) {
    return (
      <div className="new-expense">
        <button onClick={showFormClickhandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveNewExpense={saveNewExpenseHandler}
        onHideFormHandler={hideFormHandler}
      ></ExpenseForm>
    </div>
  );
};

export default NewExpense;
