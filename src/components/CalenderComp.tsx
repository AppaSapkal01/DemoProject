import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';

const CalendarComp: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAttendanceModalVisible, setAttendanceModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [afternoonAttendance, setAfternoonAttendance] = useState<'Present' | 'Absent' | null>(null);
  const [eveningAttendance, setEveningAttendance] = useState<'Present' | 'Absent' | null>(null);
  const [markedDates, setMarkedDates] = useState<{ [date: string]: { selected: boolean; disableTouchEvent: boolean; selectedColor: string; selectedTextColor: string } }>({});

  const toggleModal = (date: string) => {
    setModalVisible(!isModalVisible);
    setSelectedDate(date);
  };

  const handleSectionPress = (section: string) => {
    console.log(`Selected section: ${section}`);
    setModalVisible(false);
    setAttendanceModalVisible(true);
  };

  const handleAttendancePress = (status: 'Absent' | 'Present') => {
    console.log(`Selected attendance status: ${status}`);
    setAttendanceModalVisible(false);

    // Update the attendance status based on the selected section
    if (selectedDate) {
      if (selectedDate === 'Afternoon') {
        setAfternoonAttendance(status);
      } else if (selectedDate === 'Evening') {
        setEveningAttendance(status);
      }
    }

    // Implement logic to mark the date with the selected status color
    const updatedMarkedDates = {
      ...markedDates,
      [selectedDate || '']: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: getSelectedColor(status),
        selectedTextColor: 'white',
      },
    };

    // Set the updated markedDates state
    setMarkedDates(updatedMarkedDates);
  };

  const getSelectedColor = (status: 'Absent' | 'Present') => {
    if (status === 'Present') {
      // If present for both afternoon and evening
      if (afternoonAttendance === 'Present' && eveningAttendance === 'Present') {
        return 'green';
      }
      // If present for either afternoon or evening
      else {
        return 'orange';
      }
    } else {
      return 'red';
    }
  };

  const onDayPress = (day: any) => {
    console.log('Selected day', day);
    toggleModal(day.dateString);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerView2}>
        <Text style={styles.calendarText}>Calendar</Text>
        <View style={styles.innerView3}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={markedDates}
            style={styles.calendar}
          />
        </View>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Select Section:</Text>
          <TouchableOpacity onPress={() => handleSectionPress('Afternoon')}>
            <Text style={styles.modalOption}>Afternoon</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSectionPress('Evening')}>
            <Text style={styles.modalOption}>Evening</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={isAttendanceModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Will you be:</Text>
          <TouchableOpacity onPress={() => handleAttendancePress('Absent')}>
            <Text style={styles.modalOption}>Absent</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAttendancePress('Present')}>
            <Text style={styles.modalOption}>Present</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    color: 'black',
    fontFamily: 'Kanit',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    letterSpacing: 0,
    marginTop: 20,
    marginLeft: 20,
  },
  calendar: {
    width: '80%',
    aspectRatio: 0.8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    height: '80%',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 10,
  },
});

export default CalendarComp;
