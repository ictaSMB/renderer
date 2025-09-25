import styled from "@emotion/styled";
import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Coc } from "./types";

const Page = styled("div")`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;

export const CocTemplate: FunctionComponent<TemplateProps<Coc>> = ({ document }) => {
  const { name, recipient } = document;
  return (
    <Page>
      <div className="" id="custom-template">
        <h1>{name}</h1>
        <div>issued to</div>
        <h2>{recipient.name}</h2>
      </div>
    </Page>
  );
};
