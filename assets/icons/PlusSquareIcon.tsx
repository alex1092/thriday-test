import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PlusSquareIcon = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.5 3h-14a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM12.5 8v8M8.5 12h8"
    />
  </Svg>
);
export default PlusSquareIcon;
