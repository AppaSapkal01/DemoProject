import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const AbstCandidates = () => {
  const dummyData = [
    [
      ['1235', 'xyz', '2'],
      ['1234', 'xyz', '2'],
      // Rest of the data...
    ],
    // More data...
  ];

  const [tableData, setTableData] = useState(dummyData[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');

  const navigatePrevious = () => {
    const previousIndex = (currentIndex - 1 + dummyData.length) % dummyData.length;
    setCurrentIndex(previousIndex);
    setTableData(dummyData[previousIndex]);
  };

  const navigateNext = () => {
    const nextIndex = (currentIndex + 1) % dummyData.length;
    setCurrentIndex(nextIndex);
    setTableData(dummyData[nextIndex]);
  };

  const handleSearch = () => {
    // Logic for filtering the tableData based on the searchInput
  };



  return (
    <View style={styles.container}>
      <View style={styles.child1}>
      </View>
      <View style={styles.child2}>
        <TextInput
          style={styles.input}
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
          placeholder="Search..."
          placeholderTextColor="black"
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.child3}>
        <View style={styles.yellowContent}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row
              data={['Sr. No', 'Name', 'Number of Absent Days']}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </View>
      </View>
      <View style={[styles.child4, styles.pinkView]}>
        <TouchableOpacity onPress={navigatePrevious} style={[styles.button, styles.prevButton]}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.currentIndexText}>Current Index: {currentIndex}</Text>
        <TouchableOpacity onPress={navigateNext} style={[styles.button, styles.nextButton]}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  child1: {
    flex: 0.1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  child2: {
    flex: 0.13,
    backgroundColor: 'orange',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  child3: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  yellowContent: {
    flex: 1,
    padding: 10,
  },
  child4: {
    flex: 0.2,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  pinkView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'red',
  },
  prevButton: {
    marginRight: 'auto',
  },
  nextButton: {
    marginLeft: 'auto',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  currentIndexText: {
    color: 'black',
    textAlign: 'center',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    color: 'black',
  },
});

export default AbstCandidates;
