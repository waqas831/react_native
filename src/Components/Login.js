import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native-web";
const Login = () => {
  const [input, setinput] = useState("");
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const submit = () => {
    alert("submitted data");
  };
  return (
    <View style={mystyle.whole}>
      <TextInput
        style={mystyle.input}
        placeholder="e.g waqas ishaq"
        value={input}
        onChangeText={(text) => setinput(text)}
        name="name"
      />
      <TextInput
        style={mystyle.input}
        keyboardType="email-address"
        placeholder="e.g waqasishaq800@gmail.com"
        value={input1}
        onChangeText={(text1) => setinput1(text1)}
        name="password"
      />
      <TextInput
        style={mystyle.input}
        visible-password={false}
        placeholder="password "
        value={input2}
        onChangeText={(text2) => setinput2(text2)}
        name="email"
      />
      <Button style={mystyle.welcome} title="click here" onPress={submit} />
    </View>
  );
};

export default Login;
const mystyle = StyleSheet.create({
  welcome: {
    fontSize: 30,
    paddingTop: 10,
    backgroundColor: "green",
    width: 120
  },
  whole: {
    height: 900,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    padding: 10,
    fontSize: 20,
    textTransform: "capitalize",
    backgroundImage: "linear-gradient(to left,red,green,blue,white)",
    color: "red",
    width: 430,
    height: 90
  }
});
