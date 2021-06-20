import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { url, Sizes, type } from "../../../constanst/index";
import { store } from "../reducers";
import { getListArticles } from "../services";

const sliderWidth = Sizes.vw;
const sliderHeight = Math.ceil(sliderWidth * 0.4);
const itemWidth = Math.ceil(sliderWidth * 0.9);

const PanigationCarosel = ({ articles, activeSlide }) => {
  return (
    <Pagination
      dotsLength={articles.length}
      activeDotIndex={activeSlide}
      dotStyle={{
        width: 8,
        height: 2,
        borderRadius: 1,
        backgroundColor: "#C81526",
      }}
      inactiveDotStyle={{
        backgroundColor: "#FCDBCF",
      }}
      inactiveDotOpacity={0.6}
      inactiveDotScale={1}
    ></Pagination>
  );
};

const ArticleSlider = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const { dispatch, articles } = React.useContext(store);

  React.useEffect(() => {
    getListArticles().then((result) => {
      dispatch({
        type: type.LIST_ARTICEL,
        data: result.articles,
      });
      setLoading(false);
    });
  }, []);

  const imgageSlider = ({ item, index }) => {
    return (
      <View>
        <Image
          style={styles.slideImg}
          source={{
            uri: `${url.URL_SERVER_MEDIA}/cache/500x166/${item.avatar}`,
          }}
        />
      </View>
    );
  };
  return (
    <View>
      {!loading && (
        <Carousel
          layout={"default"}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
          data={articles}
          renderItem={imgageSlider}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={0.95}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      )}
      <PanigationCarosel
        articles={articles}
        activeSlide={activeSlide}
      ></PanigationCarosel>
    </View>
  );
};

export default ArticleSlider;
const styles = StyleSheet.create({
  wrap: {
    width: Sizes.vw,
    height: sliderHeight,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  slide: {
    width: itemWidth,
    justifyContent: "center",
    alignItems: "center",
    height: Math.ceil(itemWidth * 0.33),
  },
  slideImg: {
    width: itemWidth,
    height: Math.ceil(itemWidth * 0.33),
    borderRadius: 8,
  },
  pagination: {
    position: "absolute",
    right: 0,
    bottom: -15,
    left: (sliderWidth - 50) / 2,
    width: 50,
  },
});
