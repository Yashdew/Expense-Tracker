import ExpenseItem from "./ExpenseItem";
import "./ExpenseComponent.css";
import Cards from "../UI/Cards";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpenseComponents = (props) => {
  
  const [filterYear,setFilterYear] = useState('2022');

  const filterYearChangehandler = (selectedYear) => {
      setFilterYear(selectedYear);
  }
  
  return (
    <div>
        
        {/* Add filter Components */}
        <Cards className="expenses">
        <ExpensesFilter selected = {filterYear} onChangeFilter = {filterYearChangehandler}/>
        <ExpenseItem
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
        ></ExpenseItem>
      </Cards>
    </div>
    
  );
}

export default ExpenseComponents;
