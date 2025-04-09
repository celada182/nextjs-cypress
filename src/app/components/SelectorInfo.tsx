"use client";

import React from "react";

interface Props {}

interface State {
  values: string[];
}

export class SelectorInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      values: ["Option 1"],
    };
  }
  render() {
    const options = this.state.values?.map((value) => <div>· {value}</div>);
    return (
      <div>
        <h1>Selected Options</h1>
        {options}
      </div>
    );
  }
}
