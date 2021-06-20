import { router } from "../constanst";
import HomeScreen from "../screens/home/HomeScreen";
import PageNotFound from "../screens/notFound";

export const tabsComponent = [
  {
    key: router.HOME,
    name: "Meete",
    component: HomeScreen,
  },
  {
    key: router.EARNPOINT,
    name: "Tích điểm",
    component: PageNotFound,
  },
  {
    key: router.SEARCH,
    name: "Khám phá",
    component: PageNotFound,
  },
  {
    key: router.CARD,
    name: "Giỏ hàng",
    component: PageNotFound,
  },
  {
    key: router.ACCOUNT,
    name: "Tài khoản",
    component: PageNotFound,
  },
];
