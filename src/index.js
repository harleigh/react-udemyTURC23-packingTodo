import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/PackingTodoApp"; //App is whatever function export default is

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);