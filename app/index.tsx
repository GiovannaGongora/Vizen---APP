// app/index.tsx
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const logar = () => {
    if (user === "" || password === "") {
      alert("preencha usuario e senha");
      return;
    } else {
      router.push("/timeline");
    }
    if (user === "admin" && password === "admin") {
      alert("LOGADO COMO ADM");
      router.push("/timeline");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={require("../assets/images/ap.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Entrar</Text>
        <TextInput
          placeholder="User"
          style={styles.input}
          value={user}
          onChangeText={setUser}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text onPress={() => router.push("./cadastro")} style={styles.boxTexto}>
          Cadastre-se
        </Text>
        <Text style={styles.boxTexto}>Esqueci minha senha</Text>
        <TouchableOpacity style={styles.btNentrar} onPress={logar}>
          <Text
            style={{
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "10%",
  },
  subtitle: {
    fontSize: 16,
    color: "#c4c4c4ff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  containerImg: {
    width: "100%",
    height: "100%",
  },
  box: {
    gap: 10,
    backgroundColor: "#f0f0f0ff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    minHeight: 400,
  },

  input: {
    height: 50,
    padding: 5,
    marginHorizontal: 8,
    borderWidth: 1,
    width: "70%",
  },
  btNentrar: {
    height: 40,
    width: "70%",
    backgroundColor: "green",
    padding: 10,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  boxTexto: {
    fontSize: 15,
  },
});
