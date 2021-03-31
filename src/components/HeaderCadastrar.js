import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function components() {
  const navigation = useNavigation();
  return (
    <View style={styles.areaVoltar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-left" size={30} color="#9438f5" />
      </TouchableOpacity>
      <View style={styles.areaText}>
        <Text style={styles.text}>Voltar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  areaVoltar: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: 'blue',
    marginTop: 10,
    marginLeft: 20,
  },
  areaText: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: 'blue',
    marginLeft: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e8f0fe",
  },
});
