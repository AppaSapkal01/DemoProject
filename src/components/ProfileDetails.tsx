import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icons from './Icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Profile: undefined;
  ProfileDetails: undefined;
  // Add other screens as needed
};

type ProfileDetailsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ navigation }) => {
  const [isChevronDown, setIsChevronDown] = useState(false);

   const handleToggleIcon = () => {
    setIsChevronDown(prev => !prev);
    navigation.navigate('Profile')
  };

  return (
    <>
      <View style={styles.cardContainer}>
        <View style={{width: '100%', height: 48, backgroundColor: '#F46413', borderTopStartRadius: 10, borderTopEndRadius: 10}} />
        <View style={styles.tDetails}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', height: 42, top:10, left: 25}}>
            <Text>Amount</Text>
            <Text>:</Text>
            <Text>2600</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', height: 42, top:10, left: 25}}>
            <Text>Type</Text>
            <Text>:</Text>
            <Text>Two Time</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', height: 42, top:10, left: 25}}>
            <Text>Month</Text>
            <Text>:</Text>
            <Text>Jan 2024</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', height: 42, top:10, left: 25}}>
            <Text>Present</Text>
            <Text>:</Text>
            <View style={{width: 36, height: 21, borderRadius: 18, backgroundColor: '#34A853',}}>
            <Text style={{color: '#E1E1E1', left: 8}}>10</Text>
            </View>
            
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', height: 42, top:10, left: 25}}>
            <Text>Amount</Text>
            <Text>:</Text>
            <View style={{width: 36, height: 21, borderRadius: 18, backgroundColor: '#FE1400',}}>
            <Text style={{color: '#E1E1E1', left: 8}}>10</Text>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', height: 42, top:10, left: 25}}>
            <Text>Amount</Text>
            <Text>:</Text>
            <View style={{width: 36, height: 21, borderRadius: 18, backgroundColor: '#F46413',}}>
            <Text style={{color: '#E1E1E1', left: 8}}>10</Text>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', height: 42, top:10, left: 25}}>
            <Text>Amount</Text>
            <Text>:</Text>
            <Text>2600</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', height: 42, top:10, left: 25}}>
            <Text>Amount</Text>
            <Text>:</Text>
            <Text>2600</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', height: 42, top:10, left: 25}}>
            <Text>Amount</Text>
            <Text>:</Text>
            <Text>2600</Text>
          </View>
        
        </View>
        <View style={{width: '100%', height: 36, backgroundColor: '#F46413', borderBottomStartRadius: 10, borderBottomEndRadius: 10}}>
          <TouchableOpacity onPress={handleToggleIcon} style={{position: 'relative', width: 30, height: 30}}>
            <Icons name={isChevronDown ? 'chevron-down' : 'chevron-up'}
                color="white"
                size={30}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 135,
                  transform: [{rotate: isChevronDown ? '-360deg' : '0deg'}],
                }}/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default ProfileDetails;

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 488,
    borderRadius: 10,
    top: 40,
    left: '12%'
  },
  text: {
    padding: '2%',
    flex: 1
  },
  tDetails: { 
    height: 394,
    width: '90%',
  }
})

