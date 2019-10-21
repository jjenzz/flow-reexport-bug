import React from "react";
import ReactDOM from "react-dom";
import { foo } from "./utils";

function App() {
  // doesn't work
  const num: number = foo();
  console.log(num);

  return null;
}

ReactDOM.render(<App />, document.getElementById("root"));
