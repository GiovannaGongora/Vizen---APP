// app/cadastro.tsx

import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropdownSelect from "react-native-input-select";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ backgroundColor: "green" }}
        onPress={() => router.back()}
      >
        <Text>back</Text>
      </TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.title}> Cadastro</Text>
        <TextInput style={styles.input}> Nome </TextInput>
        <TextInput style={styles.input}> CPF </TextInput>
        <TextInput style={styles.inputAp}> Num AP </TextInput>

        <DropdownSelect
          selectedValue=""
          label="Qual seu condominio"
          options={[]}
          onValueChange={() => {}}
          dropdownStyle={styles.dropdown}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
  },
  box: {
    padding: 3,
    gap: 22,
  },
  dropdown: {
    margin: 0,
    height: 8,
    width: 300,
  },
  input: {
    height: 50,
    padding: 5,
    borderWidth: 1,
    width: 300,
  },
  inputAp: {
    height: 50,
    padding: 5,
    borderWidth: 1,
    width: 100,
  },
});
