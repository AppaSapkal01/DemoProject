import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from './Icons';
import NameSection from './NameSection';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Profile: undefined;
  ProfileDetails: undefined;
  // Add other screens as needed
};

type ProfileCardProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};


const ProfileCard: React.FC<ProfileCardProps> = ({ navigation }) => {
  const [isChevronDown, setIsChevronDown] = useState(false);
  // const navigation = useNavigation();

   const handleToggleIcon = () => {
    setIsChevronDown(prev => !prev);
    navigation.navigate('ProfileDetails')
  };
  return (
    <>
      <NameSection />
      <View style={styles.innerView}>
        <View style={styles.childView2}>
          <TouchableOpacity style={{width: 28, height: 28}}>
            <Icons name="edit" color="white" style={{top: 3, left: 268}} />
          </TouchableOpacity>

          <Text style={styles.text}>Profile</Text>
          <Image
            source={require('../assets/dummy-image.jpg')}
            style={styles.image}
          />
          <Text style={styles.txtName}>Sunny Salve</Text>
          <View style={{top: -30}}>
            <Icons
              name="phone"
              color="black"
              size={16}
              style={{top: 195, left: 76.06}}
            />
            <Text style={styles.txtNo}>8308374426 </Text>
            <Icons
              name="envelope"
              color="black"
              size={16}
              style={{top: 225, left: 76.06}}
            />
            <Text style={styles.txtMail}>xyz@gmail.com</Text>
            <Icons
              name="map-marker"
              color="black"
              size={16}
              style={{top: 250, left: 79}}
            />
            <Text style={styles.txtAdd}>Xyz, No12, Abcde.</Text>
          </View>

          <View style={styles.childView3}>
            <TouchableOpacity
              onPress={handleToggleIcon}
              style={{position: 'relative', width: 30, height: 30}}>
              <Icons
                name={isChevronDown ? 'chevron-down' : 'chevron-up'}
                color="white"
                size={30}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 135,
                  transform: [{rotate: isChevronDown ? '-360deg' : '0deg'}],
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity 
      style={styles.transactionBtn}
      >
        <Text style={styles.transactionBtnText}>Transaction</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  innerView: {
    position: 'absolute',
    width: 300,
    height: 377,
    top: 180,
    left: 45,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden', // Ensure overflow is hidden to hide part of the image
  },
  image: {
    width: 101,
    height: 101,
    position: 'absolute',
    top: 53,
    left: 99,
    borderRadius: 50.5, // Half of the width or height for a perfect circle
    zIndex: 100,
  },
  text: {
    width: 70,
    height: 30,
    top: 15,
    left: 123,
    fontFamily: 'Kanit',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: 'left',
    position: 'absolute',
    color: 'white',
  },
  txtName: {
    width: 189,
    height: 24,
    top: 155,
    left: 106,
    fontFamily: 'Kanit',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    position: 'absolute',
    color: '#F46413',
  },
  txtNo: {
    width: 100,
    height: 31,
    top: 188,
    left: 122,
    fontFamily: 'Kanit',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    position: 'absolute',
    color: 'black',
  },
  txtMail: {
    width: 130,
    height: 31,
    top: 233,
    left: 122,
    fontFamily: 'Kanit',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    position: 'absolute',
    color: 'black',
  },
  txtAdd: {
    width: 140,
    height: 31,
    top: 279,
    left: 122,
    fontFamily: 'Kanit',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    position: 'absolute',
    color: 'black',
  },
  childView2: {
    width: 300,
    height: 100,
    backgroundColor: '#F46413',
  },
  childView3: {
    width: 300,
    height: 36,
    backgroundColor: '#F46413',
    top: 341,
    position: 'absolute',
  },
  transactionBtn: {
    width: 80,
    height: 30,
    top: 520,
    // left: 160,
    marginHorizontal: 155,
    borderRadius: 4,
    backgroundColor: '#F46413',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  transactionBtnText: {
    fontFamily: 'Kanit',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 16.45,
    color: '#FFFFFF'
  }
});

export default ProfileCard;
