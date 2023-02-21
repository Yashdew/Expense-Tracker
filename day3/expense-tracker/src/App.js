import ExpenseComponents from "./components/Expenses/ExpenseComponent";

const App = () => {
  const expense = [
    {
      id: "e1",
      date: new Date(),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "e2",
      date: new Date(),
      title: "New TV",
      amount: 294.67,
    },
    {
      id: "e3",
      date: new Date(),
      title: "Toilet Paper",
      amount: 294.67,
    },
    {
      id: "e4",
      date: new Date(),
      title: "New Desk",
      amount: 294.67,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <ExpenseComponents expense={expense} />
    </div>
  );
}

export default App;
