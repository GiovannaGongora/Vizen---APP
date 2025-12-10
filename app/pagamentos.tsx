import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { SlideInLeft, SlideOutLeft } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Boletos() {
  const [openMenu, setOpenMenu] = useState(false);

  const boletos = [
    { id: 1, nome: "Conta de água", status: "ok" },
    { id: 2, nome: "Conta de Luz", status: "pd" },
    { id: 3, nome: "Condomínio", status: "pd" },
    { id: 4, nome: "Multa", status: "erro" },
    { id: 5, nome: "Conta de Internet", status: "pd" },
  ];

  const iconStatus = (st: string) => {
    if (st === "ok")
      return <Ionicons name="checkmark-circle" size={22} color="green" />;
    if (st === "erro")
      return <Ionicons name="close-circle" size={22} color="red" />;
    return <Ionicons name="arrow-down-circle" size={22} color="gray" />;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setOpenMenu(true)}>
            <Ionicons name="menu" size={32} color="#fff" />
          </TouchableOpacity>

          <View>
            <Text style={styles.headerName}>Giovanna - Moradora</Text>
            <Text style={styles.headerDetails}>AP 22 - Bloco3</Text>
          </View>

          <View style={styles.profileCircle}></View>
        </View>

        <Text style={styles.title}>Meus Boletos</Text>

        <View style={styles.aba}>
          <Text style={{ fontWeight: "bold" }}>Setembro</Text>
          <Text style={{ color: "grey" }}>Pagamentos</Text>
        </View>

        {boletos.map((b) => (
          <View key={b.id} style={styles.item}>
            <Text style={styles.itemText}>{b.nome}</Text>
            {iconStatus(b.status)}
          </View>
        ))}
      </ScrollView>

      {openMenu && (
        <View style={styles.overlay}>
          <TouchableOpacity
            style={StyleSheet.absoluteFill}
            onPress={() => setOpenMenu(false)}
          />

          <Animated.View
            style={styles.sidebar}
            entering={SlideInLeft}
            exiting={SlideOutLeft}
          >
            <Text style={styles.menuItem}>Avisos e Eventos</Text>

            <Text
              style={styles.menuItem}
              onPress={() => router.push("./pagamentos")}
            >
              Boletos e Multas
            </Text>

            <Text
              style={styles.menuItem}
              onPress={() => router.push("./timeline")}
            >
              Timeline
            </Text>

            <Text style={styles.menuItem}>Minhas Encomendas</Text>
            <Text style={styles.menuItem}>Minhas Reservas</Text>
            <Text style={styles.menuItem}>Assembleia</Text>
          </Animated.View>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0F2030",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerName: { color: "#fff", fontWeight: "bold" },
  headerDetails: { color: "#fff", fontSize: 12 },

  profileCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#ccc",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 15,
  },

  aba: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  itemText: {
    fontSize: 16,
  },

  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
  },

  sidebar: {
    width: "70%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
    elevation: 5,
  },

  menuItem: {
    fontSize: 18,
    paddingVertical: 15,
  },
});
