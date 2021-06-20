import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SectionLabel({ title, view }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleColection}>
        <Text style={styles.title}>{title}</Text>
        {view && (
          <View style={styles.buttonView}>
            <Text style={styles.view}>Xem tất cả</Text>
            <Ionicons
              size={20}
              name="chevron-forward-outline"
              color="#206efe"
            ></Ionicons>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    margin: 16,
    borderLeftColor: "#b02525",
    borderLeftWidth: 4,
  },
  titleColection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 8,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.15,
    fontStyle: "normal",
  },
  view: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    color: "#206efe",
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignContent: "center",
  },
});

export default SectionLabel;
