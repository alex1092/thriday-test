import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const ReceiptIcon = (props: SvgProps) => (
  <Svg width={16} height={17} fill="none" {...props}>
    <G stroke="#555" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)">
      <Path d="M13.333 8.664v5.977c0 .344-.39.545-.67.344l-.835-.598a.423.423 0 0 0-.525.026l-1.247 1.09a.423.423 0 0 1-.557 0L8 14.192l-1.5 1.311a.423.423 0 0 1-.556 0l-1.247-1.09a.423.423 0 0 0-.525-.026l-.836.598c-.28.2-.67 0-.67-.344V8.664m0 .113V2.8c0-.344.39-.544.67-.344l.836.598c.16.115.377.104.525-.025l1.247-1.091c.16-.14.397-.14.557 0L8 3.249l1.5-1.311c.159-.14.397-.14.556 0l1.247 1.09c.148.13.365.14.525.026l.836-.598c.28-.2.67 0 .67.344v5.977M4.667 10.84h3.445m-3.42-2.003h6.641M4.692 6.805h6.641" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ReceiptIcon;
