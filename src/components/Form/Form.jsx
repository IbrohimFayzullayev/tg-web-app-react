import React, { useState } from "react";
import "./form.scss";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  return (
    <div className={"form"}>
      <h3>Enter your info</h3>
      <input
        className={"input"}
        type="text"
        placeholder="Country"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={"input"}
        type="text"
        placeholder="Street"
        value={street}
        onChange={onChangeStreet}
      />
      <select value={subject} className="select" onChange={onChangeSubject}>
        <option value="physical">face id</option>
        <option value="legal">touch id</option>
      </select>
    </div>
  );
};

export default Form;
