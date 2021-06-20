import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Sizes, type, url } from "../../../constanst";
import { store } from "../reducers";
import { getListCategories } from "../services";
import CategoryItem from "../components/CategoryItem";
const containerWidth = Sizes.vw;
const itemWidth = containerWidth / 4;

function CategoryList() {
  const { dispatch, categories } = React.useContext(store);

  React.useEffect(() => {
    getListCategories().then((result) => {
      dispatch({
        type: type.LIST_CATEGORIES,
        data: result[0].items,
      });
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <FlatList
        numColumns={4}
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CategoryItem item={item}></CategoryItem>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrap: {
    width: itemWidth,
    height: itemWidth,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryList;
