import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = function (props) {
  return (
    <div className="expense-item">
      <ExpenseDate month={props.month} year={props.year} date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
