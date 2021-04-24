import React from "react";
import { Image, Text, SafeAreaView } from "react-native";
import { style } from "./style";

import wateringImage from "../../assets/watering.png";
import { Button } from "../../components/button";

export const Welcome = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Gerencie {"\n"}
        suas plantas {"\n"}
        de forma fácil
      </Text>
      <Image source={wateringImage} style={style.image} />
      <Text style={style.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button />
    </SafeAreaView>
  );
};
