import "./ExpensesForm.css";
import { useState } from "react";

function ExpensesForm(props) {
  //   const [userInput, setUserInput] = useState({
  //     enterTitle: "",
  //     enterAmout: "",
  //     date: "",
  //   });
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const enterTitleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });
    setEnterTitle(event.target.value);
  };

  const enterAmountChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enterAmout: event.target.value };
    // });
    setEnterAmount(event.target.value);
  };

  const enterDateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>enterTitle</label>
          <input
            type="text"
            value={enterTitle}
            onChange={enterTitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>enterAmout</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={enterAmountChangeHandler}
            value={enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            min="2019-1-1"
            step="2022-12-31"
            onChange={enterDateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <div>
            <button type="button" onClick={props.onCancelClicked}>Cancel</button>
          </div>
          <div>
            <button type="submit">Add Expenses</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ExpensesForm;
