import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filterYearItems = props.items.filter((items) => {
    return items.date.getFullYear().toString() === year;
  });



  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      <ExpenseList filterYear={filterYearItems} />
    </Card>
  );
}

export default Expenses;
