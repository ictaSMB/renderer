import React from "react";
import ReactDOM from "react-dom";
import { BillOfLadingSampleV2 } from "../src/templates/BillOfLading/sampleV2";
import { BillOfLadingSampleV3 } from "../src/templates/BillOfLading/sampleV3";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Bill of Lading V2", document: BillOfLadingSampleV2 },
      { name: "Bill of Lading V3", document: BillOfLadingSampleV3 },
    ]}
  />,
  document.getElementById("root")
);
