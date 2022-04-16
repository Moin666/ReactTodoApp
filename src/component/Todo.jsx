import React from "react";
import { useState } from "react";

import Input from "./common/input";

const Todo = () => {
  const [todoArr, setTodoArr] = useState([]);
  const [inputData, setInputData] = useState("");

  const getInput = (e) => {
    setInputData(e.target.value);
  };

  const addToDo = () => {
    const arr = [...todoArr];
    arr.push(inputData);
    setTodoArr(arr);
    console.log(todoArr);
  };

  const delItem = (data, index) => {
    let arr = [...todoArr];
    arr.splice(index, 1);
    console.log(arr);
    setTodoArr(arr);
  };

  const editItem = (data, index) => {
    let arr = [...todoArr];
    let editValue = prompt("input data");
    arr[index] = editValue;
    setTodoArr(arr);
  };

  const deleteAll = () => {
    let arr = [...todoArr];
    arr = [];
    setTodoArr(arr);
  };

  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-md-3 col-xs-0"></div>
        <div
          className="col-md-6 col-xs-12 border  rounded bg-white"
          style={{ height: "100%" }}
        >
          <div className="text-center my-3">
            <h3>My Todo App</h3>
          </div>
          <div className="w-100 ">
            <div className="w-100 my-2 border border-dark rounded p-2 text-center">
              {/* <input
                type="text"
                className="w-75 rounded  borderClas"
                style={{ height: "35px" }}
                onChange={getInput}
                value={inputData}
                placeholder = "type your todo here . . . ."
                
              /> */}
            <Input  getInput = {getInput} value ={inputData}  placeholder = "type your todo here . . . ." />

              <button
                className="btn btn-outline-success btn-sm mx-2"
                style={{ height: "37px" }}
                onClick={addToDo}
              >
                Add
              </button>
              <button
                className="btn btn-danger btn-sm mx-2"
                style={{ height: "37px" }}
                onClick={deleteAll}
              >
                Del All
              </button>
            </div>

            {todoArr.map((item, index) => (
              <div className="w-100  text-center border rounded p-2 my-2">
                <ul className="d-flex justify-content-between my-2  ">
                  <li className="list-unstyled text-start mx-4">{item} </li>
                  <li className="list-unstyled me-5">
                    <button
                      className="btn btn-primary btn-sm me-1"
                      onClick={() => {
                        editItem(item, index);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm  "
                      onClick={() => {
                        delItem(item, index);
                      }}
                    >
                      Del
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-3 col-xs-0"></div>
      </div>
    </div>
  );
};

export default Todo;
