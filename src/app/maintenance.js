import { router } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMaintenanceDatabase } from "../database/useMaintenanceDatabase";

export default function Maintenance() {
  const { resetDatabase } = useMaintenanceDatabase();

  const handleReset = async () => {
    try {
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

      <TouchableOpacity style={styles.button} onPress={() => router.push("signIn")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Zerar Banco</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router()}>
        <Text style={styles.buttonText}>Importar Usuários</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router()}>
        <Text style={styles.buttonText}>Importar Pagamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  windowTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  button: {
    width: "100%",
    backgroundColor: "#6200ee",
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  backButton: {
    backgroundColor: "#888",
  },
});
