import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";

const AddTask = ({ addtask }) => {
  const [input, setinput] = useState("");
  const welcome = (value) => {
    setinput(value);
  };
  return (
    <View>
      <TextInput
        placeholder="add new task"
        onChangeText={welcome}
        value={input}
      />
      <Button
        title="add task"
        onPress={() => {
          addtask(input);
        }}
      />
    </View>
  );
};

export default AddTask;
