import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { store } from "../reducers";
import { useNavigation } from "@react-navigation/native";
import { router, type } from "../../../constanst";

const HomeHeader = () => {
  const { dispatch, location } = React.useContext(store);
  const [text, setText] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const navigation = useNavigation();

  const onPressAddress = () => {
    dispatch({
      type: type.LOCATION,
      data: text,
    });
    setModalVisible(false);
  };

  return (
    <View style={styles.swap}>
      <View>
        <Text style={styles.text}>Bạn đang ở:</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.location}>
            <Ionicons name="location-outline" size={24} />
            {location}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.toast}>
        <Feather
          name="search"
          fill="#9e9e9e"
          size={24}
          style={{ marginRight: 16 }}
        />
        <TouchableOpacity onPress={() => navigation.navigate(router.NOTFOUNT)}>
          <Feather name="bell" fill="#9e9e9e" size={24} />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modelView}>
          <View>
            <Text>Nhập địa chỉ của bạn</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Địa chỉ"
              onChangeText={(text) => setText(text)}
              defaultValue={location}
            />
            <TouchableOpacity
              onPress={() => onPressAddress()}
              style={styles.button}
            >
              <Text style={styles.location}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  swap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  text: {
    color: "#8a8a8a",
    fontWeight: "400",
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 16,
  },
  location: {
    color: "#224390",
    fontWeight: "400",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 22,
  },
  toast: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    margin: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: -0.5,
  },
  modelView: {
    display: "flex",
  },
  modelHeader: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
});

export default HomeHeader;
