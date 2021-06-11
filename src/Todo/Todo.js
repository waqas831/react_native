import React, { useState } from "react";
import TodoInput from "./TodoInput";
import AddTask from "./AddTask";
import { v4 as uuidv4 } from "uuid";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  FlatList,
  StyleSheet
} from "react-native-web";
const Todo = () => {
  const [data, setdata] = useState([
    { task: "HTML I", done: true ,id:1},
    { task: "CSS", done: true  ,id:2},
    { task: "Responsive design", done: true ,id:3 },
    { task: "Git", done: true  ,id:4},
    { task: "JavaScript I", done: true  ,id:5},
    { task: "JavaScript II", done: false ,id:6 }
  ]);

  const addtask = (text) => {
    if (!text) {
      alert("no text", "please add a task");
    } else {
      setdata((predata) => {
        return [{ text: text, id: uuidv4() }, ...setdata];
      });
    }
  };

  const deletetask=((id)=>{
    setdata(predata=>{
      return predata.filter(task=>{
        task.id!=id;
      })
    })
  })
  return (
    //onPress={() => Keyboard.dismiss()
    <TouchableWithoutFeedback>
      <View style={mystyle.wholediv}>
        <AddTask addtask={addtask} />
        <View style={mystyle.make}>
          <Text>Todo application in react native</Text>
          <View style={mystyle.some}>
            <FlatList
              data={data}
              renderItem={({ item }) => <TodoInput item={item} deletetask={deletetask} />}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Todo;
const mystyle = StyleSheet.create({
  wholediv: {
    padding: 20,

    margin: "auto 0",
    width: 700,
    height: 600,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  make: {
    color: "red"
  },
  some: {
    margin: "auto 0",
    width: 500,
    height: 400
  }
});
