import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";

const LocalStorageTable = () => {
  let data = JSON.parse(localStorage.getItem("setData"));
  console.log("datadatadata === ", data);
  const RemoveItem = (deleteRow) => {
    let newArray = data?.filter((item) => item?.name != deleteRow);
    localStorage.setItem("setData", JSON.stringify(newArray));
  };

  console.log("data", data);
  return (
    <div>
      <h5>With Local-Storage</h5>
      <table className="table">
        <thead>
          <th>Name</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <tr className="action-icons">
                    <td className="edit">
                      <button>
                        <MdModeEditOutline />
                      </button>
                    </td>
                    <td className="delete">
                      <button onClick={() => RemoveItem(item?.name)}>
                        <RiDeleteBin5Line />
                      </button>
                    </td>
                  </tr>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LocalStorageTable;
