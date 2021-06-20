import axios from "axios";
import { url } from "../../constanst";

const headers = {
  "X-Meete-Client-Type": "iOS",
  "X-Meete-Client-Version": 614,
};

const httpUser = axios.create({
  baseURL: url.httpUser,
  headers: headers,
});

const httpFireStore = axios.create({
  baseURL: url.httpStore,
  headers: headers,
});

export const getListArticles = async () => {
  try {
    const result = await httpUser.get(
      "/search/articles?display=homepage&provinceId=1"
    );

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const getListCategories = async () => {
  try {
    const result = await httpUser.get(
      "/marketing/navigations?buildNumber=645&provinceId=1"
    );
    return result.data.navigations;
  } catch (e) {
    console.log(e);
  }
};

export const getListVoucher = async () => {
  try {
    const result = await httpUser.get("/voucher/terms?provinceId=1");
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const getListCollections = async () => {
  try {
    const result = await httpUser.get(
      "/marketing/collections?provinceId=1&tag=home"
    );
    const formatData = [];
    await result.data.collections.map((item) =>
      formatData.push({
        avatar: item.avatar,
        id: item.id,
        name: item.name,
      })
    );
    return formatData;
  } catch (e) {
    console.log(e);
  }
};

export const getBanner = async () => {
  try {
    const result = await httpFireStore.get("/static-data/home?provinceId=1");
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
