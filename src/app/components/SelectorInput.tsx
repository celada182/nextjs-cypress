"use client";

import React, { ChangeEvent, MouseEventHandler } from "react";
import styled from "styled-components";

const Label = styled.label`
  margin: 20px;
`;

const Input = styled.input`
  margin: 20px;
  padding: 5px;
  border: solid 1px white;
`;

const Button = styled.button`
  margin: 20px;
  padding: 5px;
  border: solid 2px white;
  color: black;
  background-color: white;
`;

interface Props {}

interface State {
  value: string;
}

export class SelectorInput extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
    };
  }

  updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  clickButton = () => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <Label id="option-input">Add option</Label>
        <Input
          id="option-input"
          placeholder="New Option"
          onChange={(e) => this.updateInput(e)}
        ></Input>
        <Button onClick={this.clickButton}>Add</Button>
      </div>
    );
  }
}
