import { Dimensions, Platform } from "react-native";

export const url = {
  URL_SERVER_MEDIA: "https://media.meete.co/",
  httpUser: "https://user.api.meete.co/",
  httpStore: "https://firestore.meete.co",
};

export const Sizes = {
  vw: Dimensions.get("screen").width,
  vh: Dimensions.get("screen").height,
};

export const router = {
  HOME: "home",
  ACCOUNT: "account",
  NOTFOUNT: "404NotFount",
  EARNPOINT: "earnPoints",
  SEARCH: "search",
  CARD: "card",
};

export const type = {
  LIST_ARTICEL: "LIST_ARTICEL",
  LIST_CATEGORIES: "LIST_CATEGORIES",
  LOCATION: "LOCATION",
  IS_LOADING: "IS_LOADING",
  BANNER: "BANNER",
  LIST_COLLESTIONS: "LIST_COLLESTIONS",
  LIST_TERM: "LIST_TERM",
};
