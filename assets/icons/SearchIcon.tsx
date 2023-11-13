import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SearchIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      stroke="#8C8CA1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.481}
      d="M7.26 13.185a5.926 5.926 0 1 0 0-11.852 5.926 5.926 0 0 0 0 11.852ZM14.667 14.667l-3.223-3.223"
    />
  </Svg>
);
export default SearchIcon;
