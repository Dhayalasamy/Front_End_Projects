import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  //--------------- useState with multiple functions --------------------

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmt, setEnteredAmt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChange(event) {
    setEnteredTitle(event.target.value);
  }
  function amtChange(event) {
    setEnteredAmt(event.target.value);
  }
  function dateChange(event) {
    setEnteredDate(event.target.value);
  }

  //----------------- Alter: useState with shared functions ---------------------------

  // function sharedChangeHandler(identifier, value) {
  //   if (identifier === "title") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "amt") {
  //     setEnteredAmt(value);
  //   } else {
  //     setEnteredDate(value);
  //   }
  // }

  // onChange={(event)=>{sharedChangeHandler("title",event.target.value)}}

  //-----------------------------------------------------------------------------------

  function submitHandler(event) {
    // when form is submitted, browser usually send a request the server
    // meaning it will refresh, to avoid that using..
    event.preventDefault();

    // creating an object and saving user inputs via useState
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmt,
      date: new Date(enteredDate), // built-in date constructor (wherever new keyword used, it is a constructor)
    };

    props.onSaveExpenseData(expenseData); // [moving to Newexpense component] lifting the STATE UP

    // Two-Way Binding i.e we are getting values from onChange event and return the empty string when onSubmit event happened
    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  }

  function resetHandler() {
    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler} onReset={resetHandler} >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChange}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            value={enteredAmt}
            onChange={amtChange}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2020-01=01"
            max="2024-01=01"
            id="date"
            value={enteredDate}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expese__action">
        <button type="submit">Add expense</button>
        <button type="reset">Reset</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
