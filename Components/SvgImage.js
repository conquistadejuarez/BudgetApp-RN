import * as React from "react";
import { SvgUri } from "react-native-svg";

export default (props) => {
  const size = props.size != undefined ? props.size : 34;
  return <SvgUri width={size} height={size} uri={props.uri} />;
};