import React from "react";

const Table = ({ detail }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <h5>with state</h5>
      <table className="table">
        <thead>
          <th>Name</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Password</th>
        </thead>
        <tbody>
          <tr>
            <td>{detail.name}</td>
            <td>{detail.lastname}</td>
            <td>{detail.email}</td>
            <td>{detail.password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
