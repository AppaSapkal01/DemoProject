import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

interface Item {
  hotelName: string;
  startDate: string;
  endDate: string;
}

const History: React.FC = () => {
  const tableData: Item[] = [
    { hotelName: '1', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '2', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '3', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '4', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '5', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '6', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '7', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '8', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '9', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '0', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '11', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '12', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '13', startDate: 'Jan 24', endDate: '2500' },
    { hotelName: '14', startDate: 'Jan 24', endDate: '2500' },
    //Add other items similarly
  ];
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Text>{item.hotelName}</Text>
      <Text>{item.startDate}</Text>
      <Text>{item.endDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hotel Name</Text>
        <Text style={styles.headerText}>Start Date</Text>
        <Text style={styles.headerText}>End Date</Text>
      </View>
      <FlatList
        data={tableData}
        keyExtractor={(item) => item.hotelName}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color for the entire container
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 41,
  },
  headerText: {
    fontWeight: 'bold',
  },
  flatListContent: {
    paddingBottom: 20, // Adjust as needed to make sure there is enough space for scrolling
  },
});

export default History;
