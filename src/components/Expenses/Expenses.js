import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((el) => {
        return <ExpenseItem key={el.id} expense={el} />;
      })}
    </Card>
  );
};

export default Expenses;
