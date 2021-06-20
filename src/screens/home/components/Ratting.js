import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SectionLabel from "../components/SectionLabel";
import { Rating } from "react-native-ratings";

function Ratting() {
  return (
    <View>
      <SectionLabel title="Đánh giá dịch vụ đã sử dung"></SectionLabel>
      <View style={styles.container}>
        <View style={styles.headerRatting}>
          <Image
            style={{ width: 48, height: 48 }}
            source={{
              uri: `https://media.meete.co/cache/50x0/2021/03/04/bb028439-7c32-41c8-be73-94da17fbf1e5.jpeg`,
            }}
          ></Image>
          <View style={styles.contentHeader}>
            <Text style={styles.store}>TOCO TOCO</Text>
            <Text style={styles.time}>16:00 19/06/2021</Text>
          </View>
        </View>
        <Rating type="star" ratingCount={5} ratingBackgroundColor="#e0e0e0" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  headerRatting: {
    display: "flex",
    flexDirection: "row",
  },
  contentHeader: {
    paddingLeft: 16,
    display: "flex",
    alignContent: "space-between",
  },
  store: {
    fontWeight: "500",
    fontSize: 14,
    color: "#696969",
  },
  time: {
    color: "#afafaf",
  },
});

export default Ratting;
