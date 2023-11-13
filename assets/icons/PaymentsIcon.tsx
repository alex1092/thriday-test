import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PaymentsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#8C8CA1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
    />
  </Svg>
);
export default PaymentsIcon;
