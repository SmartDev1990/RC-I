import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image width="96" height="96" href="https://i.ibb.co/WPFnSvq/0x40375-C92d9-FAf44d2f9db9-Bd9ba41a3317a2404f.png" />
    </Svg>
  );
};

export default Icon;
