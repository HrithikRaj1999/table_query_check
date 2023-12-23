import React from "react";
import { v4 as uuidv4 } from "uuid";
import useQueryValidator from "../hooks/useQueryValidator";

const QueryValidator = () => {
   const [isQueryValid, queryParams, showKeyValue, checkQuery]=useQueryValidator();
  return (
    <div style={{marginTop:'5px'}}>
      <h1> Query Details</h1>
      <button style={{ width: "200px" }} onClick={showKeyValue}>
        Show Query as key value
      </button>
      {queryParams.map(({ key, value }) => (
        <div key={uuidv4()}>
          {key}: {value}
        </div>
      ))}
      <button style={{ width: "200px" }} onClick={checkQuery}>
        Check Query is valid or not
      </button>
      <span> Is Query Valid= {isQueryValid.toString()}</span>
    </div>
  );
};

export default QueryValidator;
