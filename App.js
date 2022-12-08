import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { DataTable } from "react-native-paper";
import Table from "./Components/table";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <View>
      <Header />
      <Text
        style={{
          color: "Blue",
          fontSize: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Flex
      </Text>
      <Table />
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default App;
