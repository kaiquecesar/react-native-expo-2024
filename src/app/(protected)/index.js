import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { Banner } from "../../components/Banner";

export default function Home() {
  return (
    <View style={{backgroundColor: "#c23357"}}>
      <Image
        source={require("../../assets/img/welcome.png")}
        style={styles.headerImg}
      />
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.roundButton}>
          <FontAwesome6 name="spray-can-sparkles" size={24} color="black" />
            <Text style={styles.buttonText}>SkinCare</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
          <MaterialCommunityIcons name="face-woman-shimmer" size={24} color="black" />
            <Text style={styles.buttonText}>Cabelo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
          <Ionicons name="pricetags" size={24} color="black" />
            <Text style={styles.buttonText}>Produtos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
          <Ionicons name="add-circle-sharp" size={24} color="black" />
            <Text style={styles.buttonText}>Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c23357",
    padding: 10,
    flex: 1,
    alignItems: "center" // Centraliza horizontalmente
  },
  headerImg: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    elevation: 8
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20
  },
  roundButton: {
    width: 70,
    height: 70,
    backgroundColor: "#fff", 
    borderRadius: 40, 
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
