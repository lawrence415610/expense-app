import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";
import { useState } from "react";

const NewExpenses = (props) => {
  const [canEdit, setCanEdit] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
  };

  const startEditHandler = () => {
    setCanEdit(true);
  };

  const stopEditHandler = () => {
    setCanEdit(false);
  };

  return (
    <div className="new-expense">
      {!canEdit ? (
        <button onClick={startEditHandler}>Add New Expenses</button>
      ) : (
        <ExpensesForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClicked={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
