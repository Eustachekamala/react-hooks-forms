import React from "react";

function DisplayData({
  firstName,
  lastName,
}) {
  return (
    <div>
      <h1>Hello {firstName}</h1>
      <h2>Your name is {lastName}</h2>
    </div>
  );
}

export default DisplayData;