import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PayIcon = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m22.5 2-11 11M22.5 2l-7 20-4-9-9-4 20-7Z"
    />
  </Svg>
);
export default PayIcon;
