import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    const [showAddNewExpense, setShowAddNewExpense] = useState(false);
    // const [userInput, setUserinput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : '' 
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserinput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserinput((prevState) => {
        //     return { 
        //         ...prevState,
        //         enteredTitle : event.target.value
        //     }
        // });
    };

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
        // setUserinput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // setUserinput((prevState) => {
        //     return { 
        //         ...prevState,
        //         enteredAmount : event.target.value
        //     }
        // });
    }

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
        // setUserinput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserinput((prevState) => {
        //     return { 
        //         ...prevState,
        //         enteredDate : event.target.value
        //     }
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setenteredAmount('');
        setenteredDate('');
        setShowAddNewExpense(false);
    };

    const addNewExpenseHandler = () => {
        setShowAddNewExpense(true);
    }

    const removeNewExpenseHandler = () => {
        setShowAddNewExpense(false);
    }

    let visibleContent;

    if(!showAddNewExpense)
    {
        visibleContent = <div className="new-expense__actions div_center"> 
                            <button type="submit" onClick={addNewExpenseHandler}>Add Expense </button>
                         </div>
    }

    if(showAddNewExpense){
        visibleContent = <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label> Title </label>
                <input 
                    type='text' 
                    value={enteredTitle} 
                    onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label> Amount  </label>
                <input 
                    type='number' 
                    min="0.01" 
                    steps="0.01" 
                    value={enteredAmount} 
                    onChange={amountChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label> Date </label>
                <input 
                    type='date' 
                    min="2019-01-01" 
                    max="2023-12-31" 
                    value={enteredDate} 
                    onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className="new-expense__actions"> 
            <button type="cancel" onClick={removeNewExpenseHandler} >Cancel </button>
            <button type="submit">Add Expense </button>
        </div>
    </form>
    }
    return <div>
            
        {visibleContent}
        
    </div> 
    
}

export default ExpenseForm;