import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
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
import { useConfig } from "../../hooks/Config";

const productSchema = z.object({
  pro_nome: z.string(),
  marca: z.string(),
  linkcompra: z.string(),
  descricao: z.string(),
  imagem: z.string().optional()
});

export default function Product() {
  const [pro_nome, setPro_nome] = useState("");
  const { pickImage } = usePickImage();
  const [marca, setMarca] = useState("");
  const [linkcompra, setLinkCompra] = useState("");
  const [descricao, setDescricao] = useState("");
  const { createProducts, setImageProducts } = useProductsDatabase();
  const { getAllUsers } = useUserDatabase();
  const valueRef = useRef();
  const { directory } = useConfig();
  const [products, setProducts] = useState({});
  const [imagem, setImagem] = useState("");

  const handleSubmit = async () => {
    const products = { pro_nome, marca, linkcompra, descricao, imagem };

    try {
      await productSchema.parseAsync(products);
      const { insertedID } = await createProducts(products);

      console.log("Produto criado com ID:", insertedID);

      if (products.imagem) {
        await setImageProducts(insertedID, products.imagem);
        console.log("Imagem associada ao produto:", products.imagem);
      }

      setPro_nome("");
      setMarca("");
      setLinkCompra("");
      setDescricao("");
      setProducts({});
      setImagem("");
      valueRef?.current?.focus();
    } catch (error) {
      Alert.alert("Erro", `Erro ao inserir produto: ${error.message}`);
      console.log(error);
    }
  };

  const handlePickImage = async () => {
    try {
      const image = await pickImage();
      if (!image) return;

      setProducts({ ...products, imagem: image });
      console.log("Imagem escolhida:", image);
      setImagem(image);
    } catch (error) {
      console.log("Erro em handlePickImage:", error);
      Alert.alert("Erro ao buscar imagem");
    }
  };

  const handleRemoveImage = async () => {
    try {
      setProducts({ ...products, imagem: "" });
      await setImageProducts(id, "");
    } catch (error) {
      console.log("handleRemoveImage: ", error);
    }
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#1d3f63" }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <Image
            source={require("../../assets/img/cadastro.png")}
            style={styles.titleCadastro}
          />
          <View style={styles.inputView}>
            <FontAwesome5 name="tag" size={20} color="#666" />
            <TextInput
              placeholder="Nome do Produto"
              style={styles.input}
              value={pro_nome}
              onChangeText={setPro_nome}
            />
          </View>

          {/* Seção de Inputs Divididos */}
          <View style={styles.splitContainer}>
            <View style={styles.leftContainer}>
              {/* Campo de Marca */}
              <View style={styles.inputView}>
                <FontAwesome5 name="industry" size={20} color="#666" />
                <TextInput
                  placeholder="Marca"
                  style={styles.input}
                  value={marca}
                  onChangeText={setMarca}
                />
              </View>

              {/* Campo de Link */}
              <View style={styles.inputView}>
                <FontAwesome5 name="shopping-cart" size={20} color="#666" />
                <TextInput
                  placeholder="Link de Compra"
                  style={styles.input}
                  value={linkcompra}
                  onChangeText={setLinkCompra}
                />
              </View>
            </View>

            {/* Campo Quadrado de Seleção de Imagem */}
            <View style={styles.rightContainer}>
              <TouchableOpacity
                style={styles.imageBox}
                onPress={handlePickImage}
              >
                <View>
                  {!!products?.imagem ? (
                    <Image
                      source={{ uri: `${directory}/${products?.imagem}` }}
                      style={{ width: 200, height: 200 }}
                    />
                  ) : (
                    <Text>Não há imagem cadastrada</Text>
                  )}
                </View>
              </TouchableOpacity>

              {!!products?.imagem && (
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={handleRemoveImage}
                >
                  <Text style={styles.removeButtonText}>Remover Imagem</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Campo de Descrição */}
          <View style={styles.descriptionContainer}>
            <FontAwesome5 name="clipboard" size={20} color="#666" />
            <TextInput
              placeholder="Descrição"
              style={styles.descriptionInput}
              value={descricao}
              onChangeText={setDescricao}
              multiline
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
    backgroundColor: "#1d3f63"
  },

  inputView: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    width: "100%",
    height: 76
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
    backgroundColor: "#99c55c",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2
  },
  buttonContinue: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#fe9a38",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    fontFamily: "regular",
    fontSize: 38
  },
  buttonCancel: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: "#c23357",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  titleCadastro: {
    width: 370,
    height: 380,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: -125,
    marginBottom: -120
  },
  splitContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20
  },
  leftContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginRight: 10
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageBox: {
    width: "100%",
    aspectRatio: 1, // Mantém o formato quadrado
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  imageText: {
    color: "#666",
    fontSize: 16
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    width: "100%"
  },
  descriptionInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
    height: 100, // Altura maior para a descrição
    textAlignVertical: "top"
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: "#c23357",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black"
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14
  }
});
