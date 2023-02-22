import "./ExpenseComponent.css";
import Cards from "../UI/Cards";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const ExpenseComponents = (props) => {
  
  const [filterYear,setFilterYear] = useState('2023');

  const filterYearChangehandler = (selectedYear) => {
      //console.log(selectedYear);
      setFilterYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  // let expenseContent = (<p>No expense found</p>);

  // if(filteredExpenses > 0){
  //       expenseContent = filteredExpenses.map( (expense,index) => <ExpenseItem 
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   )
  // }
  return (
    <div>
        
        {/* Add filter Components */}
        <Cards className="expenses">
        <ExpensesFilter selected = {filterYear} onChangeFilter = {filterYearChangehandler}/>
        
        {/* {expenseContent} */}
        {/* { filteredExpenses.length === 0 && <p>No expense found</p>}
        { filteredExpenses.length > 0 && (filteredExpenses.map( (expense,index) => <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
        />) ) } */}
        <ExpenseList items={filteredExpenses}/>
  
        {/* {filteredExpenses.length === 0 ? 
          (<p>No expense found</p> )
          : 
          (
              filteredExpenses.map( (expense,index) => <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
          ))
        } */}
        
        {/* filter data check filteredExpense function() */}
        {/* {props.expenses.map( (expense,index) => <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
        )} */}
        {/* ALL data can be rendered using props */}
        
        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem> */}
      </Cards>
    </div>
    
  );
}

export default ExpenseComponents;
