import "./ExpenseItems.css";
import ExpenseDate  from "./ExpenseDate";
import Card  from "../UI/Card";


function ExpenseItems(props2) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props2.date}/>
      <div className="expense-item__description">
        <h2>{props2.title}</h2>
        <div className="expense-item__price ">${props2.amount}</div>
      </div>
    </Card>
    
  );
}

export default ExpenseItems;
