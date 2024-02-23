import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NameSection: React.FC = () => {
  return (
    <>
      <View style={[{width: 100, height: 21, top: 39, left: 17}]}>
        <Text style={styles.userName}>Hi Sunny,</Text>
      </View>
      <View style={{width: 383, height: 21, top: 55, left: 25}}>
        <Text style={styles.message} numberOfLines={2}>
          Welcome to your dashboard. Hope you're doing great.
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
    fontSize: 14,
    lineHeight: 20.93,
    marginLeft: '5%',
    color: '#000000',
  },
  message: {
    fontFamily: 'Kanit',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20.93,
    color: '#F46413',
  },
});
