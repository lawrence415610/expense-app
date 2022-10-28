import "./ExpensesForm.css";
import { useState } from "react";

function ExpensesForm() {
//   const [userInput, setUserInput] = useState({
//     title: "",
//     amount: "",
//     date: "",
//   });
const[title, setTitle] = useState('');
const[amount, setAmount] = useState('');
const[date, setDate] = useState('');


  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
    setAmount(event.target.value);

  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
    setDate(event.target.value);
};

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control" onChange={dateChangeHandler}>
          <label>Date</label>
          <input type="date" min="2019-1-1" step="2022-12-31" />
        </div>
        <div className="new-expense__control">
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
}

export default ExpensesForm;
