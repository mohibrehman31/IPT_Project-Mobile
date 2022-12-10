import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { DataTable } from "react-native-paper";
import Table from "../components/table";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MarkAttendance({ navigation })  {
  return (
    <View>
      <Header />
      <Text
        style={{
          color: "#191970",
          fontSize: 25,
          textAlign: "center",
          fontWeight:'bold'
        }}
      >
        Flex
      </Text>
      <Table />
      <Footer />
    </View>
  );
}