import { router } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMaintenanceDatabase } from "../database/useMaintenanceDatabase";

export default function Maintenance() {
  const { resetDatabase } = useMaintenanceDatabase();

  const handleReset = async () => {
    //reset database
    try {
      //fazer a chamada da função
      await resetDatabase();
      Alert.alert("Payments", "Banco de dados resetado com sucesso");
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível resetar o banco de dados: " + error.message
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.windowTitle}>Manutenção do Banco</Text>
      <TouchableOpacity onPress={() => router.push("signIn")}>
        <Text>login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(handleReset)}>
        <Text>zerar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router()}>
        <Text>importar usuários</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router()}>
        <Text>importar pagamentos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  windowTitle: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
