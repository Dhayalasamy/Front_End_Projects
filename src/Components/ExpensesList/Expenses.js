import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from './ExpensesList';
import React, { useState } from 'react';
import ExpensesChart from "./ExpensesChart";

function Expenses(props1) {

  // Filter Year:
  const [defaultYear, setNewYear] = useState("--Year--");

  function addExpenseFilterHandler(enteredExpenseFilterData) {
    setNewYear(enteredExpenseFilterData);
  };

  const filteredExpenses = props1.item.filter(expense => {
    return expense.date.getFullYear().toString() === defaultYear;
  });

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter
        onAddExpenseFilter={addExpenseFilterHandler}
        setDefaultYear={defaultYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <h3 className="expenses_text">
        <i>Expense List</i>
      </h3>
      <ExpensesList items={filteredExpenses} setDefaultYear={defaultYear}/>
    </Card>
    </div>
  );
}

export default Expenses;

















// let expesesContent ;

// if (filteredExpenses.length > 0 && !(defaultYear === "--Year--")){
//   expesesContent = filteredExpenses.map((exp) => {
//     return (
//       <ExpenseItems
//         title={exp.title}
//         amount={exp.amount}
//         date={exp.date}
//       />
//     );
//   });
// }else if (defaultYear === "--Year--"){
//   expesesContent=<p>Select the Year</p> 
// }else{
//   expesesContent = <p>No Expense Item found...</p>;
// }