import ExpenseItem from "./Components/ExpenseItem";

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
      <ExpenseItem
        title={expences[0].title}
        amount={expences[0].amount}
        date={expences[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expences[1].title}
        amount={expences[1].amount}
        date={expences[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expences[2].title}
        amount={expences[2].amount}
        date={expences[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expences[3].title}
        amount={expences[3].amount}
        date={expences[3].date}
      />
    </div>
  );
}

export default App;
