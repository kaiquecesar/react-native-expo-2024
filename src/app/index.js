import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuth } from "../hooks/Auth"; 
import { router } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';

export default function App() {
  const { singIn, singOut } = useAuth();
  const [email, setEmail] = useState("super@gmail.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const tooglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha primeira janela</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={50} color="black"/>
        <TextInput style={styles.emailinput} 
        placeholder="E-mail" 
        value={email} 
        onChangeText={setEmail}/>
      </View>

      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={50} color="black"/>
        <TextInput style={styles.emailinput} 
        placeholder="E-mail" 
        value={password} 
        onChangeText={setPassword}
        secureTextEntry={passwordVisibility}/>
        <Ionicons 
        name={passwordVisibility ? "eye-off-outline" : "eye-outline"} 
        size={20} color="black" 
        onPress={tooglePasswordVisibility}/>
      </View>

      <Button title='Entrar' 
        onPress={() => singIn({email: "super@email.com", 
        password: "A123456a!"})} 
        style={styles.button}/>
      <Button title='Sobre' onPress={() => router.push("/about")} />
        <Button title='Sair do Aplicativo' onPress={() => BackHandler.exitApp()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title: {
    fontFamily: "regular",
    fontSize: 20,
  },
  inputbox: {
    flexDirection: "row",
    gap: 10, 
    marginHorizontal: 40,
    marginVertical: 10, 
    alignItems: "center",
  },
  emailinput: {
    flex: 1,
    fontFamily: "regular",
     fontSize: 20,
  },
  button: {
    width: "100%"  
  },
});
