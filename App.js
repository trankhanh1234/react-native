import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./src/store";
import Loading from "../example/src/components/Loading";
import AppNavigate from "./src/AppNavigate";
export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <StatusBar
        //  hidden
        barStyle="dark-content"
      />
      {isLoading ? <Loading></Loading> : <AppNavigate></AppNavigate>}
    </Provider>
  );
}
