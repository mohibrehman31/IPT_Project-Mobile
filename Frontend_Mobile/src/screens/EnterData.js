import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../components/Button";
import axios from "axios";




export default function EnterData({ route,navigation }) {

  const {teacher_id} = route.params


  const [courses, setCourses] = useState([]);
  const [sections, setSections] = useState([]);
  const [creditHrs, setCreditHrs] = useState([]);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedCrHr, setSelectedCrHr] = useState("");


  useEffect(() => {

    var cour;

    const getData = async () => {

      try {
        await axios.post("https://localhost:44323/api/GetTeaches",{
          'id' : teacher_id
        }
          )
          .then((responce) => {
            setCourses(responce.data);
            cour = responce.data[0]["courses"];

          });
      } catch (error) {
        console.log(error);
      }
    };

    
    setCreditHrs([{ creditHrs: 1 }, { creditHrs: 2 }, { creditHrs: 3 }]);
    getData();
    console.log(creditHrs)
  }, []);


  const getSections = async () => {

    try {
      await axios
        .post("https://localhost:44323/api/GetSections",
        {
          'teacher_id' : teacher_id,
          'courses' : selectedCourse
        })
        .then((responce) => {
          setSections(responce.data);
        });
    } catch (error) {
      console.log(error);
    }

  }

  const handleSubmit = () => {

    navigation.navigate("SelectDate",{teacher_id : teacher_id,selectedCourse : selectedCourse, selectedSection : selectedSection, selectedCrHr : selectedCrHr})
  }


  const data = [
    { label: "1", value: "0" },
    { label: "2", value: "1" },
    { label: "3", value: "2" },
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
          console.log(item["courses"]);
          setSelectedCourse(item["courses"]);
          getSections();
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
   
          setSelectedSection(item["sections"])
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
          setSelectedCrHr(item["creditHrs"]);
          console.log(item["creditHrs"]);
        }}
      />

      <Button
        mode="contained"
        onPress={handleSubmit}
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
