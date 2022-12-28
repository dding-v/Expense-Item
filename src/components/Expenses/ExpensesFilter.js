import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  };
  
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div value={props.selected} onClick={dropdownChangeHandler}>
          <button value="2022">2022</button>
          <button value="2021">2021</button>
          <button value="2020">2020</button>
          <button value="2019">2019</button>
        </div>
      </div>
        <div className="line"></div>
    </div>
  );
};

export default ExpensesFilter;
