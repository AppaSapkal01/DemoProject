import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
  name: string;
  color?: string;
  size?: number;
  style?: object | Array<object>;
  isFocused?: boolean; // New prop to determine focus state
}>;
const Icons = ({name, color = '#000', size=24, style, isFocused}: IconProps) => {
  const iconColor = isFocused ? '#F46413' : color;
  return <Icon name={name} size={size} color={iconColor} style={style} />;
};

export default Icons;
