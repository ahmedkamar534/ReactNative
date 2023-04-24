import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App(props) {
  return (
    <Pressable
      onPress={() => props.remove(props.id)}
      style={({ pressed }) => pressed && styles.press}>
      <View style={styles.goal}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goal: {
    margin: 6,
    padding: 10,
    backgroundColor: "#311b6b",
    borderRadius: 8,
  },
  text: {
    color: "white",
  },
  press: {
    opacity: ".5",
  },
});
