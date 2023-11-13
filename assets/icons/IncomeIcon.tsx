import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const IncomeIcon = (props: SvgProps) => (
  <Svg width={21} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M10.5 0C4.977 0 .5 4.477.5 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Z"
    />
    <Path
      fill="#0C0"
      d="M10.5 0C4.977 0 .5 4.477.5 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Z"
      opacity={0.1}
    />
    <Path
      stroke="#0C0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M7.671 7.171h5.657v5.657M7.672 12.828l5.657-5.656"
    />
  </Svg>
);
export default IncomeIcon;
