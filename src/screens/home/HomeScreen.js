import React, { useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  SectionList,
  StatusBar,
} from "react-native";
import { HomeProvider, store } from "./reducers";
import ArticleSlider from "../home/components/ArticleSlider";
import HomeHeader from "../home/components/HomeHeader";
import CategoryList from "../home/components/CategoryList";
import TermList from "../home/components/TermList";
import Banner from "../home/components/Banner";
import CollectionList from "../home/components/CollectionList";
import Ratting from "../home/components/Ratting";
import Offer from "../home/components/Offer";

function HomeScreen(props) {
  console.log(props);

  return (
    <HomeProvider>
      <SafeAreaView style={styles.container}>
        <HomeHeader></HomeHeader>
        <SectionList
          windowSize={5}
          keyExtractor={(item) => item.key}
          stickySectionHeadersEnabled={true}
          sections={[
            { data: [<ArticleSlider />], key: 1 },
            { data: [<CategoryList />], key: 2 },
            { data: [<TermList />], key: 3 },
            { data: [<Ratting />], key: 5 },
            { data: [<Banner />], key: 4 },
            { data: [<Offer />], key: 6 },
            { data: [<CollectionList />], key: 7 },
          ]}
          renderItem={({ item }) => item}
          renderSectionHeader={({ section: { title } }) => {
            return null;
          }}
        ></SectionList>
      </SafeAreaView>
    </HomeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  swap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  location: {
    color: "#224390",
  },
  toast: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default HomeScreen;
