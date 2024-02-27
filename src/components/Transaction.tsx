import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

interface Item {
  id: string;
  month: string;
  amount: string;
}

const Transaction: React.FC = () => {
  const tableData: Item[] = [
    { id: '1', month: 'Jan 24', amount: '2500' },
    { id: '2', month: 'Jan 24', amount: '2500' },
    { id: '3', month: 'Jan 24', amount: '2500' },
    { id: '4', month: 'Jan 24', amount: '2500' },
    { id: '5', month: 'Jan 24', amount: '2500' },
    { id: '6', month: 'Jan 24', amount: '2500' },
    { id: '7', month: 'Jan 24', amount: '2500' },
    { id: '8', month: 'Jan 24', amount: '2500' },
    { id: '9', month: 'Jan 24', amount: '2500' },
    { id: '0', month: 'Jan 24', amount: '2500' },
    { id: '11', month: 'Jan 24', amount: '2500' },
    { id: '12', month: 'Jan 24', amount: '2500' },
    { id: '13', month: 'Jan 24', amount: '2500' },
    { id: '14', month: 'Jan 24', amount: '2500' },
    // Add other items similarly
  ];
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Text>{item.id}</Text>
      <Text>{item.month}</Text>
      <Text>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sr. No</Text>
        <Text style={styles.headerText}>Month</Text>
        <Text style={styles.headerText}>Amount</Text>
      </View>
      <FlatList
        data={tableData}
        keyExtractor={(item) => item.id}
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

export default Transaction;
