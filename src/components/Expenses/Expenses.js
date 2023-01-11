import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onYearChange={filterChangeHandler} />

      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
};

export default Expenses;
