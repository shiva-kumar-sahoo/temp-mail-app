import { View, Text } from "react-native";
import React from "react";
import Svg, { Circle, Text as SvgText } from "react-native-svg";

const CircularTimer = ({ countDownTimer }) => {
  const radius = 22;
  const stroke = 4;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (countDownTimer / 15) * circumference;
  return (
    <View className="flex items-center justify-center">
      <Svg height={radius * 2} width={radius * 2}>
        <Circle
          stroke="gray"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <Circle
          stroke="#16ca58"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <SvgText
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize="18"
          fill="#16ca58"
          fontWeight="bold"
          dy=".3em"
        >
          {countDownTimer}
        </SvgText>
      </Svg>
    </View>
  );
};

export default CircularTimer;
