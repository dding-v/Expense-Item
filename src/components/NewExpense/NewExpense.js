import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditting, setIsEditing] = useState(false);

  const SaveExpensaDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stoptEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditting && (
        <button onClick={startEditingHandler}>Add New</button>
      )}
      {isEditting && (
        <ExpenseForm
          onSaveExpensaData={SaveExpensaDataHandler}
          onCancel={stoptEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
