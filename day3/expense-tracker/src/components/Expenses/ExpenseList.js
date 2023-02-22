import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
    // let expenseContent = (<p></p>);
    // if(props.item.length > 0){
    //     expenseContent 
    // }
    if(props.items.length === 0){
        return (<h2 className="expenses-list__fallback">No Expense found</h2>);
    }
    return <ul className="expenses-list ">
        {
            props.items.map( (expense,index) => <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)
        }
    </ul>
};

export default ExpenseList;