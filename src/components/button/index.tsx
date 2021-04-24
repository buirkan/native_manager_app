import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "../../pages/welcome/style";

export const Button = () => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={style.button}>
      <Text style={style.buttonText}>Avançar</Text>
    </TouchableOpacity>
  );
};
