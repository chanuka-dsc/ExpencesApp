import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const changeTitleHandler = () => setTitle("updated");

  return (
    <Card className="expense-item">
      <ExpenseDate month={props.month} year={props.year} date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={changeTitleHandler}>Change title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
