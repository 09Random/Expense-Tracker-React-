import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onSaveNewExpense(newExpense);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            type="date"
            value={enteredDate}
            min={2019 - 1 - 1}
            max={2023 - 12 - 31}
            onChange={dateChangeHandler}
          />
        </div>
        <button type="cancel" onClick={props.onHideFormHandler}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
