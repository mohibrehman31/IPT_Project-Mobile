import React , {useState, setValue} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import Button from '../components/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function EnterData({ navigation }) {
  const data = [
    { label: "CS3001", value: "0" },
    { label: "CS3002", value: "1" },
    { label: "CS3003", value: "2" },
    { label: "CS3004", value: "3" },
    { label: "CS3005", value: "4" },
  ];
   const dataSection = [
    { label: "G", value: "0" },
  ];
   const dataHours = [
    { label: "3", value: "0" },
    { label: "6", value: "1" },
    { label: "9", value: "2" },
    { label: "12", value: "3" },
    { label: "15", value: "4" },
  ];
  return (
    <View>
    <Header></Header>
   <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={data}
      labelField="label"
      valueField="value"
      placeholder="Course"
      value={data.value}
      onChange={(item) => {
       //setValue(item.value);
      }}
    />
  
  <Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    data={dataSection}
    labelField="label"
    valueField="value"
    placeholder="Section"
    value={data.value}
    onChange={(item) => {
    //  setValue(item.value);
    }}
  />
  
  <Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    data={dataHours}
    labelField="label"
    valueField="value"
    placeholder="Credit Hours"
    value={data.value}
    onChange={(item) => {
      //setValue(item.value);
    }}
  />

  <Button
        mode="contained"
        onPress={() => navigation.navigate('SelectDate')}
      >
        Next
      </Button>
  </View>
  
  )}

const styles = StyleSheet.create({
  dropdown: {
    margin: 20,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
    placeholderStyle: {
    fontSize: 16,
    color:'#00008b',
    fontWeight:'bold',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});