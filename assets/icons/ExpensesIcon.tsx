import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ExpenseIcon = (props: SvgProps) => (
  <Svg width={21} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M10.5 20c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Z"
    />
    <Path
      fill="#C00"
      d="M10.5 20c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Z"
      opacity={0.1}
    />
    <Path
      stroke="#C00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M7.671 12.829h5.657V7.171M7.672 7.172l5.657 5.657"
    />
  </Svg>
);
export default ExpenseIcon;
