import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarComp: React.FC = () => {
  const selectedDate = '2024-02-16'; // Replace with your selected date
  const onDayPress = (day: any) => {
    console.log('Selected day', day);
    // Handle the selected day
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerView1}></View>
      <View style={styles.innerView2}>
        <Text style={styles.calendarText}>Calendar</Text>
        <View style={styles.innerView3}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: 'red', // Change the background color to red
                selectedTextColor: 'white',
              },
            }}
            style={styles.calendar} // Add this line to apply styles directly to the Calendar component
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView1: {
    flex: 0.1,
    backgroundColor: 'black',
    width: '100%',
  },
  innerView2: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  innerView3: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  calendarText: {
    textAlign: 'left',
    color: 'black', // Text color
    fontFamily: 'Kanit',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    letterSpacing: 0,
    marginTop: 20,
    marginLeft: 20,
  },
  calendar: {
    // Add styles to adjust the calendar component's size
    width: '80%', // Adjust the width as needed
    aspectRatio: 0.8, // Maintain aspect ratio for a square calendar
    borderWidth: 1, // Add border for better visibility
    borderColor: 'black', // Border color
    borderRadius: 10, // Border radius for rounded corners
    height: '80%',
  },
});

export default CalendarComp;
