import React, { useState, useEffect } from "react";
import LocalStorageTable from "../Components/LocalStorageTable";
import PrintTable from "../Components/PrintTable";
import SignUpForm from "../Components/SignUpForm";
// import Table from "../Components/table";

const Home = () => {
  const [showTable, setShowTable] = useState(false);
  const [detail, setDetail] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    country: null,
    gender: "",
    hobbies: "",
  });
  const pressChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };
  const handleCountries = (e) => {
    setDetail({ ...detail, country: e });
  };
  const onSubmitValue = (e) => {
    e.preventDefault();
    let setdatalist = [];
    setdatalist.push(detail);
    localStorage.setItem("setData", JSON.stringify(setdatalist));
    setShowTable(true);
    setDetail({
      name: "",
      lastname: "",
      email: "",
      password: "",
      country: "",
      gender: "",
      hobbies: "",
    });
  };
  console.log(detail, "detail");
  return (
    <div>
      <h5 style={{ textDecoration: "underline" }}>
        FORM SUBMISSION WITH LOCALSTORAGE
      </h5>
      <div className="wrapper">
        <SignUpForm
          detail={detail}
          pressChange={pressChange}
          handleCountries={handleCountries}
          onSubmitValue={onSubmitValue}
        />
        {/* {showTable == true ? (
          <div style={{ width: "50%" }}>
            <Table detail={detail} />
          </div>
        ) : null} */}
        {/* {showTable === true ? (
          <div style={{ width: "50%" }}>
            <LocalStorageTable />
          </div>
        ) : null} */}
      </div>
      {showTable === true ? (
        <div className="w-50 mt-5">
          <PrintTable />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
