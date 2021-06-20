import React from "react";
import { StyleSheet, View, Image, FlatList, Text } from "react-native";
import SectionLabel from "../components/SectionLabel";
import { Sizes, type, url } from "../../../constanst";
import { getListCollections } from "../services";
import { store } from "../reducers";

const collectionCardWidth =
  Math.ceil(Sizes.vw * 0.4) > 180 ? 236 : Math.ceil(Sizes.vw * 0.4) + 20;
const cardHeight = Math.ceil((collectionCardWidth - 10) * 0.714);

function CollectionList() {
  const [loading, setLoading] = React.useState(true);
  const { dispatch, collections } = React.useContext(store);

  React.useEffect(() => {
    getListCollections().then((result) => {
      dispatch({
        type: type.LIST_COLLESTIONS,
        data: result,
      });
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <SectionLabel title="List Collection" view></SectionLabel>
      {!loading && (
        <View>
          <FlatList
            windowSize={3}
            data={collections}
            horizontal={true}
            initialNumToRender={3}
            renderItem={({ item }) => (
              <View style={styles.wrap}>
                <View>
                  <Image
                    resizeMode="contain"
                    style={styles.img}
                    source={{
                      uri: `${url.URL_SERVER_MEDIA}/cache/300x213/${item.avatar}`,
                    }}
                  />
                </View>
                <Text style={styles.title}>{item.name}</Text>
              </View>
            )}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: collectionCardWidth - 10,
    height: cardHeight,
    marginLeft: 8,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
  },
  img: {
    width: collectionCardWidth - 10,
    height: cardHeight,
    borderRadius: 8,
    backgroundColor: "#E5E5E5",
  },
  title: {
    fontWeight: "400",
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 18,
  },
});

export default CollectionList;
