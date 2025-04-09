"use client";

import React from "react";
import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin: 20px;
  padding: 5px;
`;

interface Props {}

interface State {
  values: string[];
}

export class SelectorCheckboxes extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      values: ["Option 1", "Option 2", "Option 3"],
    };
  }
  
  render() {
    const options = this.state.values?.map((value) => (
      <div>
        <Checkbox /> {value}
      </div>
    ));
    return <div>{options}</div>;
  }
}
