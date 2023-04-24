import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

export default function Input(props) {
  const [inputValue, setInputValue] = useState("");

  const getInputHandeler = (e) => {
    setInputValue(e);
  };
  const AddItemsHandeler = () => {
    props.onAddGoal(inputValue);
    setInputValue("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />

        <TextInput
          placeholder="Your course goals"
          style={styles.input}
          onChangeText={getInputHandeler}
          value={inputValue}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Add Goal" onPress={AddItemsHandeler} color="#b180f0" />
          <View style={styles.button}></View>
          <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          <View style={styles.button}></View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#311b6b",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 8,
    width: "100%",
    marginRight: 10,
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonControl: {
    width: 100,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    marginBottom: 50,
  },
});
