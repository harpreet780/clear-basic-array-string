import React from "react";
import { Input, Label, NavItem } from "reactstrap";
import CountrySelect from "react-bootstrap-country-select";

const SignUpForm = ({
  detail,
  pressChange,
  onSubmitValue,
  handleCountries,
}) => {
  return (
    <>
      <form className="formWrapper">
        <p>Please fill the below fields of Signup</p>
        <div className="wraps">
          <Label>Username</Label>
          <Input
            type="text"
            name="name"
            className="input"
            value={detail?.name}
            onChange={(e) => pressChange(e)}
          />
        </div>
        <div className="wraps">
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            className="input"
            value={detail?.email}
            onChange={(e) => pressChange(e)}
          />
        </div>
        <div className="wraps">
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            className="input"
            value={detail?.password}
            onChange={(e) => pressChange(e)}
          />
        </div>
        <div className="wraps">
          <Label>Country</Label>
          <CountrySelect
            value={detail?.country}
            className="input"
            onChange={(e) => handleCountries(e)}
          />
        </div>
        <div className="wraps">
          <Label>Gender</Label>
          <div>
            <Input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              onChange={(e) => pressChange(e)}
            />
            <Label className="text-sm ml-2">Male</Label>
            <Input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              onChange={(e) => pressChange(e)}
            />
            <Label className="text-sm ml-2">Female</Label>
          </div>
        </div>
        <div className="wraps">
          <Label>hobbies</Label>
          <div className="d-flex align-items-center">
            <Input
              type="checkbox"
              name="hobbie"
              value="listen Music"
              onChange={(e) => pressChange(e)}
            />
            <Label check className="text-sm ml-2">
              Listen Music
            </Label>
          </div>
          <div className="d-flex align-items-center">
            <Input
              type="checkbox"
              name="Dancing"
              value="Dancing"
              onChange={(e) => {
                console.log(e, "eee");
                pressChange(e);
              }}
            />
            <Label check className="text-sm ml-2">
              Dancing
            </Label>
          </div>
          <div className="d-flex align-items-center">
            <Input
              type="checkbox"
              name="Playing badminton"
              value="Playing badminton"
            />
            <Label check className="text-sm ml-2">
              Playing badminton
            </Label>
          </div>
        </div>
        <button className="submitBtn mt-5" onClick={onSubmitValue}>
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
