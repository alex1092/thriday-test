import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const FileIcon = (props: SvgProps) => (
  <Svg  width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.6 2H5.2a1.6 1.6 0 0 0-1.6 1.6v12.8A1.6 1.6 0 0 0 5.2 18h9.6a1.6 1.6 0 0 0 1.6-1.6V6.8L11.6 2Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.6 2v4.8h4.8M13.2 10.8H6.8M13.2 14H6.8M8.4 7.6H6.8"
    />
  </Svg>
);
export default FileIcon;
