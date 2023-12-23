import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const QueryValidator = () => {
  const location = useLocation();
  const [isQueryValid, setIsQueryValid] = useState(false);
  const [queryParams, setQueryParams] = useState([]);

  const showKeyValue = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const arr = Array.from(searchParams.entries()).map(([key, value]) => ({
      key,
      value,
    }));
    setQueryParams(arr);
  }, [location.search]);


  //no space or number symbols aalowed only alphabets
  
  const checkQuery = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const alphabeticRegex = /^[A-Za-z]+$/;
    let isValid = true;
    for (let [,value] of searchParams) {
      console.log(value)
      if (!alphabeticRegex.test(value)) {
        isValid = false;
        break;
      }
    }
    setIsQueryValid(isValid);
  }, [location.search]);
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
