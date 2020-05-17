import React, { useState } from "react";
import useForm from "./components/useForm";
import useApi from "./components/useApi";

const App = () => {
  const [value, handleChange] = useForm();
  const [name, setName] = useState(null);
  const [data, error] = useApi(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Country name:
          <input
            type="text"
            name="cName"
            value={value}
            onChange={handleChange}
          />
          <input type="submit" value="submit" />
        </label>
      </form>
      <div>{JSON.stringify(data || error)}</div>
    </div>
  );
};

export default App;
