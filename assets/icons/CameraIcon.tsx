import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CameraIcon = (props: SvgProps) => (
  <Svg width={22} height={19} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 15.546a1.818 1.818 0 0 1-1.818 1.818H2.818A1.818 1.818 0 0 1 1 15.545v-10a1.818 1.818 0 0 1 1.818-1.818h3.637L8.273 1h5.454l1.819 2.727h3.636A1.818 1.818 0 0 1 21 5.545v10Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 13.727a3.636 3.636 0 1 0 0-7.273 3.636 3.636 0 0 0 0 7.273Z"
    />
  </Svg>
);
export default CameraIcon;
