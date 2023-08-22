import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/ExpensesList/Expenses";
import NewExpense from "./Components/NewExpenseForm/NewExpense";

function App() {
  const expenses = [
    { title: "book", amount: 33, date: new Date(2021, 1, 29) },
    { title: "maggie", amount: 67, date: new Date(2020, 8, 22) },
    { title: "dairymilk cake", amount: 121, date: new Date(2022, 4, 12) },
    { title: "Photo frame", amount: 2000, date: new Date(2023, 4, 12) },
    { title: "car battery", amount: 4999.99, date: new Date(2023, 1, 12) },
    { title: "sofa", amount: 3999.99, date: new Date(2023, 9, 12) }
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

