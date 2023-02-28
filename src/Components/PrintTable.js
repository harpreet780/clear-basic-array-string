import React from "react";
import { Input, Label } from "reactstrap";

const PrintTable = ({ detail, pressChange, onSubmitValue }) => {
  let data = JSON.parse(localStorage.getItem("setData"));
  return (
    <>
      {data?.map((item) => {
        return (
          <form className="formWrapper border">
            <div className="wraps">
              <Label>Username:</Label>
              <p className="m-0">{item.name}</p>
            </div>
            <div className="wraps">
              <Label>Email:</Label>
              <p className="m-0">{item.email}</p>
            </div>
            <div className="wraps">
              <Label>Password:</Label>
              <p className="m-0">{item.password}</p>
            </div>
            <div className="wraps">
              <Label>Country:</Label>
              <p className="m-0">{item.country}</p>
            </div>
            <div className="wraps">
              <Label>Gender:</Label>
              <p className="m-0">{item.gender}</p>
            </div>
            <div className="wraps">
              <Label>Hobbies:</Label>
              <p className="m-0">{item.hobbies}</p>
            </div>
            <div className="d-flex justify-content-between">
              <button className="submitBtn p-2 m-0 semifull">Update</button>
              <button className="submitBtn p-2 m-0 semifull">Delete</button>
            </div>
          </form>
        );
      })}
    </>
  );
};

export default PrintTable;
