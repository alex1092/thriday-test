import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const FilterIcon = (props: SvgProps) => (
  <Svg  width={22} height={22} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M3.552 4.212h15.084l-6.033 7.135v4.932l-3.017 1.509v-6.441L3.552 4.212Z"
    />
  </Svg>
);
export default FilterIcon;
