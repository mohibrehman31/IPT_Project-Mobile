import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import { DataTable } from "react-native-paper";
import Table from "../components/table";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "react-native-axios";

import { DataTable } from "react-native-paper";
import { ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function MarkAttendance({route,navigation }) {
  
  const {teacher_id,selectedCourse,selectedSection,selectedCrHr,day,month,year} = route.params
  const [Date, setDate] = React.useState();


  const data = [
    { label: "P", value: "0" },
    { label: "A", value: "1" },
    { label: "L", value: "2" },
  ];
  const [value, setValue] = React.useState();
  const optionsPerPage = [2, 3, 4];
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  const [states, setStates] = React.useState([]);







  useEffect(() => {

    var date = month + '-' + day + '-' + year;
    setDate(date);

    const getData = async () => {
      try {
        await axios
          .post("https://localhost:44323/api/GetUpdatedAttendances",{
            Course_Code : selectedCourse,
            section : selectedSection,
            Date : date
          })
          .then((responce) => {
            setStates(responce.data)
            console.log(states);
          
          });
      } catch (error) {
        console.log(error);
      }
    };
    
    getData();
  },[])



  const handleSubmit = async () =>{

    var data = states;

    for(let i=0;i<data.length;i++){
      data[i]["date"] = Date;
      data[i]["teacher_id"] = teacher_id;
      data[i]["course_id"] = selectedCourse;
      data[i]["cr_hr"] = parseInt(selectedCrHr);
    }
    try {
        await axios
          .post("https://localhost:44323/api/InsertAttendances",{
            attendances : data
          })
          .then((responce) => {
            console.log(responce.data)
          });
      } catch (error) {
        console.log(error);
      }
      console.log(data);
    }



  return (
    <View>
      <Header />
      <Text
        style={{
          color: "Blue",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Flex
      </Text>
      {/* <Table props={states}/> */}


      <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Roll no</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Attendance</DataTable.Title>
        </DataTable.Header>
        {states.map((x) => (
          <DataTable.Row>
            <DataTable.Cell>{x.id}</DataTable.Cell>
            <DataTable.Cell>{x.name}</DataTable.Cell>
            <DataTable.Cell>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder={ x.attendance.length === 0 ? "Enter" : x.attendance}
                value={data}
                onChange={(item) => {
                  x.attendance = item.label;

                  var updateStates = states;
                  for (var i=0; i < updateStates.length; i++) {
                    if (updateStates[i].id === x["id"]){
                      updateStates[i].attendance = item.label
                    }
                  } 
                  setStates(updateStates)
                }}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={"Rows per page"}
        />
      </DataTable>
      <Button title="Submit" style={{}} onPress= {handleSubmit}></Button>
    </ScrollView>










      <Footer />
    </View>
  );
}



const styles = StyleSheet.create({
  dropdown: {
    margin: 20,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    paddingRight: '10px'
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});