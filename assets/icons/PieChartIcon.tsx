import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PieIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#8C8CA1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.21 15.89A10 10 0 1 1 8 2.83"
    />
    <Path
      stroke="#8C8CA1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 12A10 10 0 0 0 12 2v10h10Z"
    />
  </Svg>
);
export default PieIcon;
