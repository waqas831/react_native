import React from "react";
import Login from "./Login";
import { View, Text, ImageBackground } from "react-native-web";
const Home = () => {
  return (
    <View>
      <ImageBackground
        source={require("./../../public/images/background.jpg")}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Login />
      </ImageBackground>
    </View>
  );
};

export default Home;
