import { useState } from "react";
import { Button, FlatList } from "react-native";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Input from "./components/Input";
import Goals from "./components/Goals";
export default function App() {
  const [golasList, setGolasList] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const AddGoalsHandeler = (value) => {
    setGolasList((prev) => [
      ...prev,
      { text: value, id: Math.random().toString() },
    ]);
    setshowModal(false);
  };
  const showingModal = () => {
    setshowModal(true);
  };
  const cancelShowing = () => {
    setshowModal(false);
  };

  const removeHandeler = (id) => {
    let newGoals = golasList.filter((goal) => goal.id !== id);
    setGolasList(newGoals);
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Button title="Add Goal" onPress={showingModal} color="black" />
        <Input
          onAddGoal={AddGoalsHandeler}
          visible={showModal}
          onCancel={cancelShowing}
        />

        <View style={styles.goals}>
          <FlatList
            alwaysBounceVertical="false"
            data={golasList}
            keyExtractor={(itemData) => itemData.id}
            renderItem={(itemData) => {
              return (
                <Goals
                  text={itemData.item.text}
                  id={itemData.item.id}
                  remove={removeHandeler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#e4d0ff",
  },

  goals: {
    flex: 5,
  },
});
