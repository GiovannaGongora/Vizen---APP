import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Avisos() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setOpenMenu(true)}>
          <View style={styles.hamburger} />
        </TouchableOpacity>

        <View style={styles.textoHeader}>
          <Text style={styles.headerName}>Giovanna - Moradora</Text>
          <Text style={styles.headerSub}>AP 22 - Bloco 3</Text>
        </View>

        <View style={styles.profile} />
      </View>

      {/* ICON WARNING */}
      <Ionicons
        name="warning"
        size={42}
        color="#ffbb00"
        style={{ marginTop: 30 }}
      />

      {/* TITLE */}
      <Text style={styles.title}>AVISOS DO MÊS</Text>

      {/* BLOCO CINZA */}
      <View style={styles.boxAviso} />

      {/* MENU */}
      {openMenu && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setOpenMenu(false)}
        >
          <View style={styles.sidebar}>
            <Text style={styles.menuItem}>Avisos e Eventos</Text>
            <Text style={styles.menuItem}>Boletos e Multas</Text>
            <Text style={styles.menuItem}>Timeline</Text>
            <Text style={styles.menuItem}>Minhas Encomendas</Text>
            <Text style={styles.menuItem}>Minhas Reservas</Text>
            <Text style={styles.menuItem}>Assembleia</Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },

  header: {
    height: 85,
    backgroundColor: "#242F40",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 15,
    paddingTop: 10,
    width: "100%",
  },

  textoHeader: { flex: 1, justifyContent: "center", alignItems: "flex-end" },

  headerName: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  headerSub: {
    fontSize: 14,
    color: "#ccc",
  },

  hamburger: {
    width: 28,
    height: 28,
    backgroundColor: "white",
    borderRadius: 4,
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  },

  title: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "#ffbb00",
  },

  boxAviso: {
    width: "85%",
    height: "60%",
    backgroundColor: "#ddd",
    marginTop: 20,
    borderRadius: 20,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    flexDirection: "row",
  },

  sidebar: {
    width: 250,
    height: "100%",
    backgroundColor: "#1e2e38",
    padding: 50,
  },

  menuItem: {
    color: "white",
    fontSize: 17,
    marginBottom: 20,
    marginTop: 20,
  },
});
