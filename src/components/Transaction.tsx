import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const Transaction = () => {
  const [tableHead, setTableHead] = useState(['Sr. No', 'Month', 'Amount']);
  const [tableData, setTableData] = useState([
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
    ['1234', 'Jan 24', '2500'],
  ]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, backgroundColor: 'black' }} />
      <View style={{ flex: 2, backgroundColor: 'white' }}>
        <Text style={{ color: 'black' }}>Transaction</Text>
        <View>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </View>
      </View>
      <View style={{ height: '10%', backgroundColor: 'black' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, color: 'black' }
});

export default Transaction;
