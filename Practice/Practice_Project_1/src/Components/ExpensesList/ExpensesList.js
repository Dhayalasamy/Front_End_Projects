import React from 'react';

import ExpenseItems from './ExpenseItems';
import './ExpensesList.css';

function ExpensesList(props3) {

    // This conditional Return Statement: Important **
    // The below condition is different, it has no connection btw jsx but returns jsx code first by the lexical order.
    // First is checked then jsx will proceed.

    if (props3.setDefaultYear === "--Year--"){
        return <p>Select the Year</p> 
    }else if (props3.items.length === 0 ){
        return <p className='expenses-list__fallback'>No Expense Item found...</p>;
    }else{
      console.log("return expense list")
     
    }

  return (
    <ul className='expenses-list'>
      {props3.items.map((expense) => (
        <ExpenseItems
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;