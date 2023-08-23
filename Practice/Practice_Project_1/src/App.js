import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/ExpensesList/Expenses";
import NewExpense from "./Components/NewExpenseForm/NewExpense";

function App() {
  const expenses = [
    { title: "Book", amount: 33, date: new Date(2021, 1, 29) },
    { title: "Maggie", amount: 67, date: new Date(2020, 8, 22) },
    { title: "Cake", amount: 121, date: new Date(2020, 4, 2) },
    { title: "Photo frame", amount: 200, date: new Date(2021, 4, 21) },
    { title: "Car battery", amount: 499.99, date: new Date(2020, 1, 30) },
    { title: "Sofa", amount: 399.99, date: new Date(2020, 9, 12) }
  ];

  const [defaultExpenseItem, setExpenseItem] = useState(expenses);

  function addExpenseHandler(enteredExpenseData) {
    console.log(enteredExpenseData);
    setExpenseItem((item) => {
      return [enteredExpenseData, ...item];
    });
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <Expenses item={defaultExpenseItem} />{" "}
    </div>
  );
}

export default App;

