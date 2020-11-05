import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Details from "./details";
import Description from "./Explanation";

function App() {
  const [title, setTitle] = useState(" ");
  const [photoUrl, setPhotoUrl] = useState(null);
  const [paragraph, setParagraph] = useState(" ");

  useEffect(() => {
    console.log("here");
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=XfkJmjt5h75meHfN1d81Mc3f4q7rvPM5MVNs51Ze&date=2020-11-04`
      )
      .then(res => {
        console.log(res);
        const imgSrc = res.data.url;
        setPhotoUrl(imgSrc);

        const imgTitle = res.data.title;
        setTitle(imgTitle);

        const imgDescription = res.data.explanation;
        setParagraph(imgDescription);
      })
      .catch(err => {
        console.log(err, "THIS IS WRONG 😲");
      });
  }, []);

  return (
    <div className="App">
      <h1 className="headerOne">
        NASA Photo of the Day{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>{" "}
      </h1>

      <div className="photoDiv">
        <Details imgSrc={photoUrl} title={title} />
      </div>

      <div className="paraDiv">
        <Description paragraph={paragraph} />
      </div>
    </div>
  );
}

export default App;