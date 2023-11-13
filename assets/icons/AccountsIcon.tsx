import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AccountsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#8C8CA1"
      d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
    />
    <Path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 10h22" />
    <Path
      stroke="#8C8CA1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
    />
  </Svg>
);
export default AccountsIcon;
