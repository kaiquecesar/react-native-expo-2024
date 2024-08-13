import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from "../hooks/Auth"; 

export default function App() {
  const { singIn, singOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha primeira janela</Text>
      <Button 
        title='SingIng Super' 
        onPress={() => 
          singIn({email: "super@email.com", password: "Super123!"})} />
      <Button 
        title='SingIng Adm' 
        onPress={() => 
          singIn({email: "adm@email.com", password: "Adm123!"})} />
      <Button 
        title='SingIng User' 
        onPress={() => 
          singIn({email: "user@email.com", password: "User123!"})} />
      <Button title='SingOut' onPress={() => singOut()}/>
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
  },
  title: {
    fontFamily: "regular",
    fontSize: 20,
  }
});
