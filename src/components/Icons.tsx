import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
  name: string;
  color?: string;
  size?: number;
  style?: object | Array<object>;
}>;
const Icons = ({name, color = '#000', size=24, style}: IconProps) => {
  return <Icon name={name} size={size} color={color} style={style} />;
};

export default Icons;
