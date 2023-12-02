import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const { id } = useParams();

  const handleChange = (val: string) => {
    setData(val);
    console.log("1->", val);
    uploadContent(val);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = () => {
    axios
      .get("http://localhost:3000/" + id)
      .then((response) => {
        setData(response.data);
        console.log("2->", response.data);
      })
      .catch((error) => {
        console.log("3->", error);
      });
  };

  const uploadContent = (val: String) => {
    axios
      .post("http://localhost:3000/" + id, {
        data: val,
      })
      .then((response) => {
        console.log("4->", response.data);
      })
      .catch((error) => {
        console.log("5->", error);
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
