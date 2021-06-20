import React from "react";
import { Sizes, url } from "../../../constanst";
import { Text, View, Image, StyleSheet } from "react-native";

const containerWidth = Sizes.vw;
const itemWidth = containerWidth / 4;

function CategoryItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemWrap}>
        <Image
          style={{ width: 48, height: 48 }}
          source={{
            uri: `${url.URL_SERVER_MEDIA}cache/48x48//${item.avatar}`,
          }}
        />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    height: itemWidth,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  itemWrap: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#FFFF",
  },
  name: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    fontStyle: "normal",
  },
});
export default CategoryItem;
