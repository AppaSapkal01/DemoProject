import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface TransactionItem {
  id: string;
  month: string;
  amount: string;
}

interface HistoryItem {
  hotelName: string;
  startDate: string;
  endDate: string;
}

type ListItem = TransactionItem | HistoryItem;

interface TransactionListProps {
  data: ListItem[];
}

const TransactionList: React.FC<TransactionListProps> = ({ data }) => {
  const renderItem = ({ item }: { item: ListItem }) => {
    if ('id' in item) {
      // It's a TransactionItem
      return (
        <View style={styles.item}>
          <Text>{item.id}</Text>
          <Text>{item.month}</Text>
          <Text>{item.amount}</Text>
        </View>
      );
    } else {
      // It's a HistoryItem
      return (
        <View style={styles.item}>
          <Text>{item.hotelName}</Text>
          <Text>{item.startDate} - {item.endDate}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sr. No / Hotel Name</Text>
        <Text style={styles.headerText}>Month / Start - End Date</Text>
        <Text style={styles.headerText}>Amount</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `item-${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    paddingBottom: 20,
  },
});

export default TransactionList;
