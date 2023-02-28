import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

const ArrayFields = () => {
  const [isShow, setIsShow] = useState(false);
  const [details, setDetails] = useState([
    {
      name: "",
      email: "",
    },
  ]);
  const addInputValues = (e, index) => {
    let data = [...details];
    data[index][e.target.name] = e.target.value;
    setDetails(data);
  };
  const onSubmit = (e) => {
    let data = [...details];
    data.push({
      name: "",
      email: "",
    });
    setDetails(data);
    localStorage.setItem("setDataList", JSON.stringify(details));
    console.log("setDataList");
    if (details.length === 5) {
      setIsShow(true);
      setDetails([
        {
          name: "",
          email: "",
        },
      ]);
    }

    // let updatedValue = [...viewData];
    // updatedValue.push(details)
    // setViewData(updatedValue)
    // let a = [...items];
    // a.push({})
    // setItems(a);
  };
  let dataList = JSON.parse(localStorage.getItem("setDataList"));

  return (
    <>
      {details?.slice(0, 5).map((item, index) => {
        return (
          <div className="inputBoxes">
            <div className="fullWidth" style={{ marginRight: 10 }}>
              <input
                className="input"
                id={index}
                placeholder="Name"
                type="text"
                name="name"
                value={item?.name}
                onChange={(e) => addInputValues(e, index)}
              />
            </div>
            <div className="fullWidth">
              <input
                type="email"
                name="email"
                id={index}
                className="input"
                placeholder="Email"
                value={item?.email}
                onChange={(e) => addInputValues(e, index)}
                style={{ marginRight: 10 }}
              />
            </div>
            <div style={{ width: 400 }}>
              {index === details.length - 1 && (
                <button
                  disabled={!item.name || !item.email}
                  className="submitBtn"
                  onClick={onSubmit}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        );
      })}
      {isShow && (
        <table className="table" style={{ width: "90%", tableLayout: "fixed" }}>
          <thead>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
          </thead>
          <tbody>
            {dataList.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ArrayFields;
