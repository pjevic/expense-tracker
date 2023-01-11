import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleOpenFormHandler = () => setOpenForm(!openForm);

  return (
    <div className="new-expense">
      {!openForm && <button onClick={toggleOpenFormHandler}>Add New Expense</button>}
      {openForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleOpenFormHandler} />}
    </div>
  );
};

export default NewExpense;
