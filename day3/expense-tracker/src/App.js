import ExpenseComponents from "./components/Expenses/ExpenseComponent";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenseData = [
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

  const addExpense = (expense) => {
    console.log('In app js')
    console.log(expenseData);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpense}/>
      <ExpenseComponents expenses={expenseData} />
      
    </div>
  );
}

export default App;
