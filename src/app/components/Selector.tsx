'use client'

import React from "react";
import { SelectorInput } from "./SelectorInput";
import { SelectorCheckboxes } from "./SelectorCheckboxes";
import { SelectorInfo } from "./SelectorInfo";

export class Selector extends React.Component {
  componentDidMount() {
    console.log("Selector mount");
  }
  componentDidUpdate() {
    console.log("Selector update");
  }
  componentWillUnmount() {
    console.log("Selector unmount");
  }
  render() {
    return <div>
        <SelectorInput></SelectorInput>
        <SelectorCheckboxes></SelectorCheckboxes>
        <SelectorInfo></SelectorInfo>
    </div>
  }
}
