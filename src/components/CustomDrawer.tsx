import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View} from 'react-native';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  // Extract properties from props
  const {state, descriptors, navigation} = props;

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        {/* Your custom drawer content */}
        <View style={{flex: 1}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
