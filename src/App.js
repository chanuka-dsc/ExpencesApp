import React from "react";
import Expense from "./Components/Expenses/Expense";

function App() {
  const expences = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 94,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "car insuarance",
      amount: 294.64,
      date: new Date(2021, 2, 28),
    },
    { id: "e3", title: "New desk", amount: 450, date: new Date(2021, 5, 12) },
    {
      id: "e4",
      title: "New TV",
      amount: 799.99,
      date: new Date(2021, 6, 11),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense items={expences} />
    </div>
  );
}

export default App;
