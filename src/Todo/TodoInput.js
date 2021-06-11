import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";
const TodoInput = ({ item, deletetask }) => {
  return (
    <TouchableOpacity>
      <View style={myst.hello}>
        <Text>{item.task}</Text>
        <Text onPress={() => deletetask(item.id)}>delete</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoInput;
const myst = StyleSheet.create({
  hello: {
    flex: 1,
    border: "3px solid black",
    padding: 8,
    justifyContent: "space-between",
    flexDirection: "row"
  }
});
