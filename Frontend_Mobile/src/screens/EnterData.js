import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../components/Button";
import axios from "react-native-axios";
export default function EnterData({ navigation }) {
  const [courses, setCourses] = useState([]);
  const [sections, setSections] = useState([]);
  const [creditHrs, setCreditHrs] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get("https://localhost:44323/api/GetTeaches")
          .then((responce) => {
            setCourses(responce.data);
          });
      } catch (error) {
        console.log(error);
      }

      try {
        await axios
          .get("https://localhost:44323/api/GetSections")
          .then((responce) => {
            setSections(responce.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    setCreditHrs([{ CrHr: 1 }, { CrHr: 2 }, { CrHr: 3 }]);
    getData();
  }, []);
  const CourseChange = (course) => {
    console.log(course);
    setSelectedCourse(course);
  };
  const [course, setCourse] = useState();
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
        data={courses}
        labelField="courses"
        valueField="cou"
        placeholder="Course"
        value="courses"
        onChange={(item) => {
          // setCourse("dsa");
          CourseChange(item["courses"]);
        }}
      />

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={sections}
        labelField="sections"
        valueField="value"
        placeholder="Section"
        value="sections"
        onChange={(item) => {
          // setValue(item.value);
          console.log(item["sections"]);
        }}
      />

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={creditHrs}
        labelField="creditHrs"
        valueField="value"
        placeholder="Credit Hours"
        value="creditHrs"
        onChange={(item) => {
          // setValue(item.value);
          console.log(item["CrHr"]);
        }}
      />

      <Button
        mode="contained"
        onPress={() => navigation.navigate("SelectDate")}
      >
        Next
      </Button>
    </View>
  );
}

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
