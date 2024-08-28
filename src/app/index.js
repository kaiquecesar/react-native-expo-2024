import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from "../hooks/Auth"; 
import { router } from 'expo-router';

export default function App() {
  const { singIn, singOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha primeira janela</Text>
      <Button 
        title='SingIng Super' 
        onPress={() => 
          singIn({email: "super@email.com", password: "A123456a!"})} />
      <Button 
        title='SingIng Adm' 
        onPress={() => 
          singIn({email: "adm@email.com", password: "Adm123!"})} />
      <Button 
        title='SingIng User' 
        onPress={() => 
          singIn({email: "user@email.com", password: "User123!"})} />

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
  }
});
