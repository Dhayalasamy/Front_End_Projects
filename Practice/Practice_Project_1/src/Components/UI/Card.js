import "./Card.css";  // Card is the WRAPPER COMPONENT used in Expenses and ExpenseItems

function Card(props3) {
  const classes = "card " + props3.className; // card + expenses & card + expense-item 
                                              // is the class we are using here +
                                              //expense-item className from Expenseitems
  return <div className={classes}>{props3.children}</div>;
}  

export default Card;
