import { useState } from "react";
import ExpenseComponents from "./components/Expenses/ExpenseComponent";
import NewExpense from "./components/NewExpenses/NewExpense";


const DUMMY_EXPENSES = [
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

const App = () => {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = (expense) => {
    console.log(expense);
    //setExpenses([expense,...expenses]);
    setExpenses( (prevExpense) => {
      return [expense,...prevExpense];
    }); //best way to update data 
   
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpense}/>
      <ExpenseComponents expenses={expenses} />
      
    </div>
  );
}

export default App;
