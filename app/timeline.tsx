import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Timeline() {
  const [openMenu, setOpenMenu] = useState(false);

  const posts = [
    {
      id: "1",
      user: "João",
      ap: "AP 1",
      bloco: "Bloco A",
      content:
        "asdfasdasdasdasdasdasdasdasdasdasddasd asdasdasdasdasdsda dasdasdsadsa dasdasdsadsa",
    },
    {
      id: "2",
      user: "Joana",
      ap: "AP 66",
      bloco: "Swift",
      content:
        "asdfasdasdasdasdasdasdasdasdasdasddasd asdasdasdasdasdsda dasdasdsadsa dasdasdsadsa",
      image: "https://images.unsplash.com/photo-1601758123927-1965c0c7e2e9",
    },
    {
      id: "3",
      user: "João",
      ap: "AP 16",
      bloco: "Síndico",
      content:
        "asdfasdasdasdasdasdasdasdasdasdasddasd asdasdasdasdasdsda dasdasdsadsa dasdasdsadsa",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setOpenMenu(true)}>
          <Ionicons name="menu" size={32} color="#fff" />
        </TouchableOpacity>
        <View style={styles.textoHeader}>
          <Text style={styles.headerName}>Giovanna - Swift</Text>
          <Text style={styles.headerSub}>AP 23 - Bloco 3</Text>
        </View>

        <View style={styles.profile} />
      </View>

      <FlatList
        style={{ flex: 1 }}
        data={posts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              {item.user} - {item.ap} - {item.bloco}
            </Text>

            {item.image && (
              <Image source={{ uri: item.image }} style={styles.cardImage} />
            )}

            <Text style={styles.cardText}>{item.content}</Text>
          </View>
        )}
      />
      {openMenu && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setOpenMenu(false)}
        >
          <View style={styles.sidebar}>
            <Text
              style={styles.menuItem}
              onPress={() => router.push("./avisos")}
            >
              Avisos e Eventos
            </Text>
            <Text
              style={styles.menuItem}
              onPress={() => router.push("./pagamentos")}
            >
              Boletos e Multas
            </Text>
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
    backgroundColor: "#F5F5F0",
  },
  textoHeader: { flex: 1, justifyContent: "center", alignItems: "flex-end" },
  header: {
    height: 85,
    backgroundColor: "#242F40",

    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 15,
    paddingTop: 10,
  },

  headerName: {
    fontSize: 18,
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

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  cardTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  cardText: {
    marginTop: 5,
    fontSize: 14,
  },

  cardImage: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginTop: 8,
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
