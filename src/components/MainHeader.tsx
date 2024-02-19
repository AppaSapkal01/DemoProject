import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icons from './Icons'

const MainHeader = () => {
  return (
    <View style={styles.header}>
        <View style={styles.menuIcon}>
          <TouchableOpacity>
            <Icons name="bars" color="white" />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default MainHeader;


const styles = StyleSheet.create({
    header: {
        width: 428,
        height: 50,
        backgroundColor: '#000000',
      },
      menuIcon: {
        height: 18,
        width: 28,
        top: 16,
        left: 22
      },
})

