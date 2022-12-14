import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import DatePicker from "@dietime/react-native-date-picker";
import Button from "../components/Button";

export default function App({route, navigation }) {
  const {teacher_id, selectedCourse,selectedSection, selectedCrHr} = route.params


  const [date, setDate] = useState();
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");



  useEffect(() => {

    
    let newDate = new Date()
    setDate(newDate)


  },[])
 

  return (
    <View style={styles.container}>
      <View style={styles.date}>
        {[
          { title: "Day", value: date ? date.getDate() : "?" },
          { title: "Month", value: date ? date.getMonth() + 1 : "?" },
          { title: "Year", value: date ? date.getFullYear() : "?" },
        ].map((el, index) => {
          return (
            <View style={styles.datePart} key={index}>
              <Text style={styles.title}>{el.title}</Text>
              <Text style={styles.digit}>{el.value}</Text>
            </View>
          );
        })}
      </View>
      <DatePicker
        value={date}
        width={"80%"}
        fontSize={19}
        height={170}
        onChange={(value) => setDate(value)}
      />

      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("MarkAttendance",{
            teacher_id : teacher_id,
            selectedCourse : selectedCourse,
            selectedSection : selectedSection,
            selectedCrHr : selectedCrHr,
            day : date.getDate(),
            month : date.getMonth()+1,
            year : date.getFullYear()
          });
        }}
      >
        Next
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  date: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  datePart: {
    width: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "200",
    marginBottom: 5,
  },
  digit: {
    fontSize: 20,
  },
});
