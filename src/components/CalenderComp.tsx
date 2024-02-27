import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface SelectedDate {
  date: string;
  meal: string;
}

const App = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [tempSelectedDate, setTempSelectedDate] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('');
  const [selectedMeals, setSelectedMeals] = useState<SelectedDate[]>([]);

  const handleDatePress = (date: any) => {
    setSelectedDate(date.dateString);
    setTempSelectedDate(date.dateString);
    setShowPopup1(true);
  };

  const handleYesButton = () => {
    setShowPopup1(false);
    setShowPopup2(true);
  };

  const handleMealSelection = (meal: string) => {
    setSelectedMeal(meal);
    setShowPopup2(false);
    setShowPopup3(true);
  };

  const handleOkButton = () => {
    setShowPopup3(false);
    setSelectedMeals((prevMeals) => [...prevMeals, { date: tempSelectedDate, meal: selectedMeal }]);
    setTempSelectedDate('');
    setShowPopup2(true); // Redirect to Popup2
  };

  const handleCancelButton = () => {
    setShowPopup3(false);
  };

  const handleCloseButton = () => {
    setShowPopup2(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Calendar onDayPress={handleDatePress} />

      <Modal visible={showPopup1} transparent={true} animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text style={{ color: 'black' }}>Hurray, You were present on {selectedDate}! No?</Text>
            <TouchableOpacity onPress={handleYesButton}>
              <Text style={{ color: 'blue' }}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={showPopup2} transparent={true} animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text style={{ color: 'black' }}>Select your meal</Text>
            <TouchableOpacity onPress={() => handleMealSelection('Lunch')}>
              <Text style={{ color: 'blue' }}>Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMealSelection('Dinner')}>
              <Text style={{ color: 'blue' }}>Dinner</Text>
            </TouchableOpacity>
            <Button title="Close" onPress={handleCloseButton} />
          </View>
        </View>
      </Modal>

      <Modal visible={showPopup3} transparent={true} animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text style={{ color: 'black' }}>Are you sure?</Text>
            <Button title="Ok" onPress={handleOkButton} />
            <Button title="Cancel" onPress={handleCancelButton} />
          </View>
        </View>
      </Modal>

      <View style={{ marginTop: 20 }}>
        <Text>Selected Dates:</Text>
        {selectedMeals.map((item: SelectedDate, index: number) => (
          <Text key={index}>{item.date} - {item.meal}</Text>
        ))}
      </View>
      
    </View>
  );
};

export default App;
