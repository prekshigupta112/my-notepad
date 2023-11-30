import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const handleChange = (val: string) => {
    setData(val);
    console.log(val);
  };

  useEffect(() => {
    fetchContent();
    uploadContent();
  }, []);

  const fetchContent = () => {
    axios
      .get("http://localhost:3000/67")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uploadContent = () => {
    axios
      .post("http://localhost:3000/67", {
        data: "hehehe",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <textarea
        name="data"
        value={data}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default App;
