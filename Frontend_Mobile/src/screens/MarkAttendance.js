import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import { DataTable } from "react-native-paper";
import Table from "../components/table";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function MarkAttendance({ navigation }) {
  
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
      <Table/>
      <Footer />
    </View>
  );
}
