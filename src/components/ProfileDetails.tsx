import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NameSection from './NameSection';

type RootStackParamList = {
  Profile: undefined;
  ProfileDetails: undefined;
  // Add other screens as needed
};

type ProfileDetailsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const ProfileDetails: React.FC<ProfileDetailsProps> = ({navigation}) => {
  const [isChevronDown, setIsChevronDown] = useState(false);

  const handleToggleIcon = () => {
    setIsChevronDown(prev => !prev);
    navigation.navigate('Profile');
  };

  return (
    <>
      <NameSection />
      <View style={styles.cardContainer}>
        <View
          style={{
            width: '100%',
            height: 31,
            backgroundColor: '#F46413',
            borderTopStartRadius: 10,
            borderTopEndRadius: 10,
          }}
        />
        <View style={styles.tDetails}>
          <View
            style={styles.txtWrapper}>
            <Text style={styles.txt}>Amount</Text>
            <Text style={styles.txt}>:</Text>
            <Text style={styles.txt}>2600</Text>
          </View>
          <View
            style={styles.txtWrapper}>
            <Text style={styles.txt}>Type</Text>
            <Text style={styles.txt}>:</Text>
            <Text style={styles.txt}>Two Time</Text>
          </View>
          <View
            style={styles.txtWrapper}>
            <Text style={styles.txt}>Month</Text>
            <Text style={styles.txt}>:</Text>
            <Text style={styles.txt}>Jan 2024</Text>
          </View>
          <View
            style={styles.txtWrapper}>
            <Text style={styles.txt}>Present</Text>
            <Text style={styles.txt}>:</Text>
            <View
              style={{
                width: 36,
                height: 21,
                borderRadius: 18,
                backgroundColor: '#34A853',
              }}>
              <Text style={[styles.txt, {color: '#E1E1E1', left: 8}]}>10</Text>
            </View>
          </View>
          <View
            style={styles.txtWrapper}>
            <Text style={styles.txt}>Amount</Text>
            <Text style={styles.txt}>:</Text>
            <View
              style={{
                width: 36,
                height: 21,
                borderRadius: 18,
                backgroundColor: '#FE1400',
              }}>
              <Text style={[styles.txt, {color: '#E1E1E1', left: 8}]}>10</Text>
            </View>
          </View>
          <View
            style={styles.txtWrapper}>
            <Text style={styles.txt}>Amount</Text>
            <Text style={styles.txt}>:</Text>
            <View
              style={{
                width: 36,
                height: 21,
                borderRadius: 18,
                backgroundColor: '#F46413',
              }}>
              <Text style={[styles.txt, {color: '#E1E1E1', left: 8}]}>10</Text>
            </View>
          </View>
          <View
            style={styles.txtWrapper}>
            <Text style={styles.txt}>Amount</Text>
            <Text style={styles.txt}>:</Text>
            <Text style={styles.txt}>2600</Text>
          </View>
          <View
            style={styles.txtWrapper}>
            <Text style={styles.txt}>Amount</Text>
            <Text style={styles.txt}>:</Text>
            <Text style={styles.txt}>2600</Text>
          </View>
          <View style={styles.txtWrapper}>
            <Text style={styles.txt}>Amount</Text>
            <Text style={styles.txt}>:</Text>
            <Text style={styles.txt}>2600</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 35,
            backgroundColor: '#F46413',
            borderBottomStartRadius: 10,
            borderBottomEndRadius: 10,
          }}
        />
      </View>
    </>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 488,
    borderRadius: 10,
    top: 95,
    left: '12%',
  },
  txt: {
    fontFamily: 'Kanit',
    fontWeight: '300',
    fontSize: 18,
    lineHeight: 26.91
  },
  tDetails: {
    height: 394,
    width: '90%',
  },
  txtWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    height: 42,
    top: 10,
    left: 25,
  },
});
