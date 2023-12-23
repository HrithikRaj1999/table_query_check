import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

const Form = () => {
  const [studentData, handleSubmit, handleChange] = useForm();
  return (
    <>
      <h1>Student Information</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={studentData.name}
          onChange={handleChange}
        />
        <label>Roll</label>
        <input
          type="text"
          value={studentData.roll}
          name="roll"
          onChange={handleChange}
        />
        <label>Class</label>
        <input
          type="text"
          value={studentData.class}
          name="stuClass"
          onChange={handleChange}
        />
        <button type="submit">Add to table and change query</button>
      </form>
    </>
  );
};

export default Form;
