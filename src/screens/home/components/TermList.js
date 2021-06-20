import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { getListVoucher } from "../services";
import SectionLabel from "../components/SectionLabel";
import CategoryItem from "../components/CategoryItem";
import { store } from "../reducers";
import { type } from "../../../constanst";

function TermList() {
  const { dispatch, terms } = React.useContext(store);
  React.useEffect(() => {
    getListVoucher().then((result) =>
      dispatch({
        type: type.LIST_TERM,
        data: result.terms,
      })
    );
  }, []);
  return (
    <View>
      <SectionLabel title="Danh mục"></SectionLabel>
      <FlatList
        numColumns={4}
        windowSize={3}
        data={terms}
        initialNumToRender={3}
        renderItem={({ item }) => <CategoryItem item={item}></CategoryItem>}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </View>
  );
}

export default TermList;
