import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
const ListHeader = () => {
  //View to set in Header
  return <View style={styles.headerFooterStyle}></View>;
};

const styles = StyleSheet.create({
  headerFooterStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "#FFF",
  },
});

export default ListHeader;
