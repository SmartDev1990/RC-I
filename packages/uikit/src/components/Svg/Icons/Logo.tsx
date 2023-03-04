import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
      <image width="198" height="198" href="https://i.ibb.co/xYSTM6w/logotext.png" />
    </Svg>
  );
};

export default Icon;
