import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Profile: undefined;
    ProfileDetails: undefined;
    EditProfile: undefined;
    // Add other screens as needed
  };
  
  type EditProfileProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
  };

const EditProfile: React.FC<EditProfileProps> = ({navigation}) => {
  return (
    <View>
      <Text>EditProfile</Text>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({})