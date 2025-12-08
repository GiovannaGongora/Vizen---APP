// app/index.tsx
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
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
        <TextInput placeholder="User" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} />
        <Text onPress={() => router.push("./")} style={styles.boxTexto}>
          Cadastre-se
        </Text>
        <Text style={styles.boxTexto}>Esqueci minha senha</Text>
        <TouchableOpacity style={styles.btNentrar}>
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
