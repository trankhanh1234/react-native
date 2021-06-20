import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Sizes, type, url } from "../../../constanst";
import { store } from "../reducers";
import { getBanner } from "../services";

const contentWidth = Sizes.vw - 20;
const contentHeight = Math.ceil(contentWidth * 0.22);
function Banner() {
  const { dispatch, banner } = React.useContext(store);

  React.useEffect(() => {
    if (Object.keys(banner).length === 0) {
      getBanner().then((result) => {
        dispatch({
          type: type.BANNER,
          data: result.banner,
        });
      });
    }
  }, []);

  return (
    <View style={styles.wrap}>
      <Image
        resizeMode="contain"
        style={styles.slideImg}
        source={{
          uri: `${url.URL_SERVER_MEDIA}cache/800x0/${banner.src}`,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {
    width: Sizes.vw,
    height: contentHeight + 20,
    alignItems: "center",
    justifyContent: "center",
  },
  slideImg: {
    width: contentWidth,
    height: contentHeight,
    borderRadius: 5,
    borderStartColor: 0.5,
    borderStartColor: "#f4f4f4",
  },
});

export default Banner;
