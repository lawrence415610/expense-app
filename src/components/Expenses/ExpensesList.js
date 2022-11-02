import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  if (props.filterYear.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filterYear.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
