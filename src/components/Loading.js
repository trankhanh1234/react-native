import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Loading() {
  return (
    <View style={styles.wrap}>
      <Text>Wellcome to Meete</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b70b0b",
  },
  img: {
    width: "100%",
    height: "auto",
  },
});
export default Loading;
