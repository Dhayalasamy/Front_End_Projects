import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";


function NewExpense (props){

    const [isEditing, setIsEdidting]=useState(false);
      
    function SaveExpenseDataHandler(enteredExpenseData){
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData); // [moving to App component] lifting the STATE UP
        setIsEdidting(false);
        
    };

    function startNewExpenseForm(){
        setIsEdidting(true);
    };

    function stopNewExpenseForm(){
        setIsEdidting(false);
    }

    return (
        <div className="new-expense">  {/* below condition is {true && result }*/}
            {!isEditing && <button onClick={startNewExpenseForm}>Add a New Expense Item</button>} 
            {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopNewExpenseForm}/>}
        </div>
    );
}

export default NewExpense;