import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

ReactDOM.render(
  <React.StrictMode>
    <ProfilePhoto />
    <FullName />
    <Address />
  </React.StrictMode>,
  document.getElementById("root")
);
