import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { tabsComponent } from "../router";

const Tab = createBottomTabNavigator();

function MainTabs(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Meete") {
            return (
              <Ionicons
                name={focused ? "home" : "home"}
                size={size}
                color={color}
              />
            );
          }
          if (route.name === "Tích điểm") {
            return (
              <Ionicons
                name={focused ? "card-outline" : "card-outline"}
                size={size}
                color={color}
              />
            );
          }
          if (route.name === "Khám phá") {
            return (
              <Ionicons
                name={focused ? "compass-outline" : "compass-outline"}
                size={size}
                color={color}
              />
            );
          }
          if (route.name === "Giỏ hàng") {
            return (
              <Ionicons
                name={focused ? "cart-outline" : "cart-outline"}
                size={size}
                color={color}
              />
            );
          }
          if (route.name === "Tài khoản") {
            return (
              <Ionicons
                name={
                  focused ? "person-circle-outline" : "person-circle-outline"
                }
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      {tabsComponent.map((item) => (
        <Tab.Screen {...item} />
      ))}
    </Tab.Navigator>
  );
}

export default MainTabs;
