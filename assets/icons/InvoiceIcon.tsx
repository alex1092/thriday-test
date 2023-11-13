import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const InvoiceIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#8C8CA1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
    />
    <Path
      stroke="#8C8CA1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
    />
  </Svg>
);
export default InvoiceIcon;
