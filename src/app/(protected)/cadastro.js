import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { z } from "zod";

import { useUserDatabase } from "../../database/useUserDatabase";
import { useProductsDatabase } from "../../database/useProductsDatabase";
import { usePickImage } from "../utils/pickImage";

const productSchema = z.object({
  pro_nome: z.string(),
  marca: z.string(),
  linkcompra: z.string(),
  descricao: z.string()
});

export default function Product() {
  const [pro_nome, setPro_nome] = useState("");
  const { pickImage } = usePickImage();
  const [marca, setMarca] = useState("");
  const [linkcompra, setLinkCompra] = useState("");
  const [descricao, setDescricao] = useState("");
  const { createProducts } = useProductsDatabase();
  const { getAllUsers } = useUserDatabase();
  const valueRef = useRef();

  const handleSubmit = async () => {
    const products = { pro_nome, marca, linkcompra, descricao };
    try {
      await productSchema.parseAsync(products);
      const { insertedID } = await createProducts(products);
      console.log(insertedID);
      setPro_nome("");
      setMarca("");
      setLinkCompra("");
      setDescricao("");
      valueRef?.current?.focus();
    } catch (error) {
      Alert.alert("Erro", `Erro ao inserir produto: ${error.message}`);
      console.log(error);
    }
  };

  const handlePickImage = async () => {
    try {
      const image = await pickImage();
      console.log("Image: ", image);
    } catch (error) {
      console.log("handlePickImage: ", error);
      Alert.alert("Erro ao buscar imagem");
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Cadastre um Produto</Text>

          <View style={styles.inputView}>
            <FontAwesome5 name="tag" size={20} color="#666" />
            <TextInput
              placeholder="Nome do Produto"
              style={styles.input}
              value={pro_nome}
              onChangeText={setPro_nome}
            />
          </View>

          <View>
            <TouchableOpacity title="Escolher Imagem" onPress={handlePickImage}>
              <Text> Escolher Imagem</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputView}>
            <FontAwesome5 name="industry" size={20} color="#666" />
            <TextInput
              placeholder="Marca"
              style={styles.input}
              value={marca}
              onChangeText={setMarca}
            />
          </View>

          <View style={styles.inputView}>
            <FontAwesome5 name="shopping-cart" size={20} color="#666" />
            <TextInput
              placeholder="Link de Compra"
              style={styles.input}
              value={linkcompra}
              onChangeText={setLinkCompra}
            />
          </View>

          <View style={styles.inputView}>
            <FontAwesome5 name="clipboard" size={20} color="#666" />
            <TextInput
              placeholder="Descrição"
              style={styles.input}
              value={descricao}
              onChangeText={setDescricao}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContinue}>
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => router.back()}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f9fa"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    width: "100%"
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20
  },
  buttonSave: {
    flex: 1,
    marginRight: 5,
    backgroundColor: "#28a745",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonContinue: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonCancel: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: "#dc3545",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
