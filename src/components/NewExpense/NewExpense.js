import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const SaveExpensaDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensaData={SaveExpensaDataHandler} />
    </div>
  );
};

export default NewExpense;
