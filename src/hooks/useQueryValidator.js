import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

const useQueryValidator = () => {
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
    for (let [, value] of searchParams) {
      console.log(value);
      if (!alphabeticRegex.test(value)) {
        isValid = false;
        break;
      }
    }
    setIsQueryValid(isValid);
  }, [location.search]);
  return [isQueryValid, queryParams, showKeyValue, checkQuery];
};
export default useQueryValidator;
