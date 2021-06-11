import React from "react";
//import Home from "./Components/Home";
//import Router from "./Components/Routes";
import Todo from "./Todo/Todo";
import { StyleSheet, View, ScrollView } from "react-native";

function App() {
  return (
    <ScrollView>
      <View>
        <Todo />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
