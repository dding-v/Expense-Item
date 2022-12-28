import React from "react";
import "./ExpenseItem.css";
import ExpenseData from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseData date={props.date} />
        <div className="expense-bg">
          <h2>
            {props.title}
            <div className="expense-item__description">
              <div className="expense-item__price">{props.amount} 원</div>
            </div>
          </h2>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
