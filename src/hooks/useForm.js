import { useDispatch } from "react-redux";
import { addStudent } from "../redux/student/studentSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
export const useForm = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    roll: "",
    stuClass: "",
  });
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(studentData).toString();
    navigate(`?${queryParams}`);
    dispatch(
      addStudent({
        name: studentData.name,
        roll: studentData.roll,
        class: studentData.stuClass,
      })
    );
  };
  const handleChange = (e) => {
    setStudentData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return [studentData, handleSubmit, handleChange];
};
