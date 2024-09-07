// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function MaterialCommunityIcon({ style, ...rest }: IconProps<ComponentProps<typeof MaterialCommunityIcons>['name']>) {
    return <MaterialCommunityIcons style={[ style]} {...rest} />;
  }