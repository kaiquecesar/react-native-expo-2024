import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuth } from "../hooks/Auth"; 
import { router } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';

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
      Alert.alert("Erro", error.message)
      console.log(error);
    }
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAÇA SEU LOGIN</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={50} color="black"/>
        <TextInput style={styles.emailinput}
        value={email} 
        placeholder="E-mail" 
        onChangeText={setEmail}/>
      </View>

      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={50} color="black"/>
        <TextInput style={styles.emailinput} 
        placeholder="Senha"
        value={password} 
        onChangeText={setPassword}
        secureTextEntry={passwordVisibility}/>
        <Ionicons 
        name={passwordVisibility ? "eye-off-outline" : "eye-outline"} 
        size={20} color="black" 
        onPress={tooglePasswordVisibility}/>
      </View>

      <Button title='Entrar' 
        onPress={handleEntrarSuper} 
        style={styles.button}/>

      <Button title='Sobre' onPress={() => router.push("/about")}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title: {
    fontFamily: "bold",
    fontSize: 25,
  },
  inputbox: {
    flexDirection: "row",
    gap: 10, 
    marginHorizontal: 40,
    marginVertical: 10, 
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 8,
  },
  emailinput: {
    flex: 1,
    fontFamily: "regular",
     fontSize: 20,
  },
  button: {
    width: "100%", 
    backgroundColor: "blue",
  },
});
