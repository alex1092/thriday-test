import * as React from 'react';
import Svg, { SvgProps, Circle, Rect } from 'react-native-svg';
const Stepper = (props: SvgProps) => (
  <Svg width={114} height={8} fill="none" {...props}>
    <Circle cx={38} cy={4} r={4} fill="#00D373" opacity={0.32} />
    <Circle cx={56} cy={4} r={4} fill="#00D373" opacity={0.32} />
    <Circle cx={74} cy={4} r={4} fill="#00D373" opacity={0.32} />
    <Circle cx={92} cy={4} r={4} fill="#00D373" opacity={0.32} />
    <Circle cx={110} cy={4} r={4} fill="#00D373" opacity={0.32} />
    <Rect width={24} height={8} fill="#00D373" rx={4} />
  </Svg>
);
export default Stepper;
