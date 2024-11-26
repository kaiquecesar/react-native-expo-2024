import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/welcome.png")}
        style={styles.headerImg}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    flex: 1,
    alignItems: "center", // Centraliza horizontalmente
  },
  headerImg: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%", // Faz os botões ocuparem toda a largura
    paddingHorizontal: 20,
  },
  roundButton: {
    width: 60,
    height: 60,
    backgroundColor: "#6200ea", // Cor de fundo do botão
    borderRadius: 30, // Faz o botão ser redondo
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
