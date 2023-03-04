import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image width="1281" height="199" href="https://i.ibb.co/dJQVmgf/1.png" />
    </Svg>
  );
};

export default Icon;
