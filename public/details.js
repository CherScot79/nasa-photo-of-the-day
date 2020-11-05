import React from "react";

export default function Details(props) {
  const { title, imgSrc } = props;

  return (
    <div>
      <h2>{title}</h2>
      <img id="img-id" src={imgSrc} alt=" Outer space" />
    </div>
  )};