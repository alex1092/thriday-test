import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PowerIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.36 5.64a9 9 0 1 1-12.73 0M12 1v10"
    />
  </Svg>
);
export default PowerIcon;
