import React from "react";
import axios from "axios";

export default function Description(props) {
  const { paragraph } = props;

  return (
    <div>
      <p>{paragraph}</p>
    </div>
  );
}
