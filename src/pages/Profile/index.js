import React, { useState } from "react";
import { changeName } from "../../store/profile/actions";
import { useSelector, useDispatch } from "react-redux";
import { selectName } from "../../store/profile/selectors";

export const Profile = () => {
  const [value, setValue] = useState("");
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h2>THIS IS PROFILE OF {name}</h2>
      <form action="" onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button onClick={handleSubmit}>Save name</button>
      </form>
    </>
  );
};
