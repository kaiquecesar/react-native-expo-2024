import { View, ImageBackground, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Banner2 } from "../../components/Banner/banner2";
import { router } from "expo-router";

export default function Home() {
  return (
    <ImageBackground
      source={require("../../assets/img/principal.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Banner centralizado */}
        <View style={styles.banner}>
          <Banner2 />
        </View>

        {/* Botões logo abaixo */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.roundButton} onPress={() => router.push("skincare")}>
            <FontAwesome6 name="spray-can-sparkles" size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={() => router.push("cabelo")}>
            <MaterialCommunityIcons name="face-woman-shimmer" size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={() => router.push("produtos")}>
            <Ionicons name="pricetags" size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={() => router.push("cadastro")}>
            <Ionicons name="add-circle-sharp" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  container: {
    flex: 1,
    //justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    width: "100%",
    marginTop: 200
  },
  banner: {
    marginBottom: 50, // Espaço entre o banner e os botões
    width: "100%", // O banner ocupará 100% da largura disponível
    //backgroundColor: "black"
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 250,
  },
  roundButton: {
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  buttonText: {
    color: "#000",
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
});
