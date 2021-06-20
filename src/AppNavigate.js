import React from "react";
import * as Linking from "expo-linking";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PageNotFound from "./screens/notFound/index";
import MainTabs from "./navigate/MainTabs";
import { router } from "./constanst";
const Stack = createStackNavigator();
const prefix = Linking.createURL("/");

function AppNavigate(props) {
  const routerApp = [
    {
      key: router.HOME,
      name: router.HOME,
      component: MainTabs,
      options: { headerShown: false },
    },
    { key: router.NOTFOUNT, name: router.NOTFOUNT, component: PageNotFound },
  ];
  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer linking={linking}>
      {/* Rest of your app code */}
      <Stack.Navigator initialRouteName={router.HOME}>
        {routerApp.map((item) => (
          <Stack.Screen {...item} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigate;
