import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { router } from "../../constanst";

function PageNotFound(props) {
  const { navigation } = props;
  return (
    <View style={styles.wrap}>
      <Text>404 Page not found</Text>
      <TouchableOpacity onPress={() => navigation.navigate(router.HOME)}>
        <Text>back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "auto",
  },
});
export default PageNotFound;
