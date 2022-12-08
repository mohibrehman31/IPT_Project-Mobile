import React , {useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import Button from '../components/Button'

export default function EnterData({ navigation }) {
  const data = [
    { label: "Present", value: "0" },
    { label: "Absent", value: "1" },
    { label: "Leave", value: "2" },
  ];
  return (
    <View>
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
        setValue(item.value);
      }}
    />
  
  <Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    data={data}
    labelField="label"
    valueField="value"
    placeholder="Section"
    value={data.value}
    onChange={(item) => {
      setValue(item.value);
    }}
  />
  
  <Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    data={data}
    labelField="label"
    valueField="value"
    placeholder="Credit Hours"
    value={data.value}
    onChange={(item) => {
      setValue(item.value);
    }}
  />

  <Button
        mode="contained"
        onPress={() => navigation.navigate('TeacherLogin')}
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
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});