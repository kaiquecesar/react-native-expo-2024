//pagina de login
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  BackHandler,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const { singIn, singOut } = useAuth();
  const [email, setEmail] = useState("super@gmail.com");
  const [password, setPassword] = useState("super!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const tooglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleEntrarSuper = async () => {
    try {
      await singIn({ email, password });
      // router.replace("/");
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/img/signin3.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.backbox}>
          <Text style={styles.title}>FAÇA SEU LOGIN</Text>
          <View style={styles.inputbox}>
            <Ionicons name="mail-open-outline" size={36} color="black" />
            <TextInput
              style={styles.emailinput}
              value={email}
              placeholder="E-mail"
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputbox}>
            <Ionicons name="lock-closed-outline" size={36} color="black" />
            <TextInput
              style={styles.emailinput}
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={passwordVisibility}
            />
            <Ionicons
              name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="black"
              onPress={tooglePasswordVisibility}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleEntrarSuper}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.linkText}
            onPress={() => router.push("/about")}
          >
            <Text style={styles.linkText}>Sobre  </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkText}
            onPress={() => router.push("/maintenance")}
          >
            <Text style={styles.linkText}>   Manutenção</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15
  },
  title: {
    fontFamily: "medium",
    fontSize: 23,
    marginHorizontal: 61,
    color: "#1e5796"
  },
  inputbox: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    padding: 15,
    width: "90%",
    marginBottom: 10
  },
  emailinput: {
    flex: 1,
    fontFamily: "regular",
    fontSize: 18,
    paddingHorizontal: 10
  },
  button: {
    width: "80%",
    backgroundColor: "#1e5796",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  backbox: {
    marginTop: 280,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "rgba(255,255,255, 0.8)",
    width: 370,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  linkText: {
    color: "#1e5796",
    textDecorationLine: "underline",
    fontSize: 18,
    marginTop: -5,
    fontFamily: "medium"
  }
});
