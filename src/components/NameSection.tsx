import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from './Icons';

const NameSection = () => {
  return (
    <>
    <View style={styles.calenderButtonSection}>
        <TouchableOpacity>
          <Icons
            name="calendar"
            size={31}
            color="black"
            style={styles.calenderButton}
          />
          <Text
            style={[
              styles.calenderText,
              {
                width: 49,
                height: 18,
                top: -25,
                left: 39,
                lineHeight: 17.94,
              },
            ]}>
            Calendar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[{width: 105, height: 36, top: 48, left: 16}]}>
        <Text style={styles.userName}>Hi Sunny,</Text>
      </View>
      <View style={{width: 483, height: 30, top: 51, left: 1}}>
        <Text style={styles.message} numberOfLines={2}>
          Welcome to your dashboard.
        </Text>
      </View>
    </>
  );
};

export default NameSection;

const styles = StyleSheet.create({
  calenderButtonSection: {
    width: 95,
    height: 31,
    top: 15,
    left: 292,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F46413',
  },
  calenderButton: {
    top: -4,
    left: 3,
  },
  calenderText: {
    fontFamily: 'Kanit',
    fontWeight: '900',
    color: '#F46413',
    fontSize: 12,
  },
  userName: {
    fontFamily: 'Kanit',
    fontWeight: '300',
    fontSize: 24,
    lineHeight: 35,
    marginLeft: '5%',
    color: 'black',
  },
  message: {
    fontFamily: 'Kanit',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    color: '#F46413',
  },
});
