import { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useProductsDatabase } from "../../database/useProductsDatabase";
import { FlashList } from "@shopify/flash-list";
import { Banner1 } from "../../components/Banner/banner1";
import { useConfig } from "../../hooks/Config";

export default function List() {
  const [data, setData] = useState([]);
  // const { getPayments } = usePaymentsDatabase();
  const { getProducts } = useProductsDatabase();
  const [page, setPage] = useState(0); //controlar qual pagina o sistema já carregou
  const [loading, setLoading] = useState(true); //controlar se está carregando os dados do banco
  const [hasMore, setHasMore] = useState(true); //controlar se tem mais itens para carregar
  const { directory } = useConfig();

  async function fetchData() {
    if (hasMore === false) return; // se essa flag for falsa, não há mais dados para carregar
    console.log(page);
    setPage(page + 1);
    // buscar produtos no banco de dados
    const products = await getProducts(page);

    if (products.length < 5) setHasMore(false); // se a quantidade de produtos for menor que 5, não há mais dados para carregar

    setData([...data, ...products]);
    setLoading(false);
  }

  useEffect(() => {
    // executa a primeira vez a busca de dados
    setPage(0);
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{item.pro_nome}</Text>

      <View style={styles.productImageContainer}>
        {item.imagem ? (
          <Image
            source={{ uri: `${directory}/${item.imagem}` }}
            style={styles.productImage}
          />
        ) : (
          <Text style={styles.noImageText}>Sem Imagem</Text>
        )}
      </View>

      <View style={styles.productDetails}>
        <Text style={styles.productBrand}>{item.marca}</Text>
        <Text style={styles.productLink}>{item.linkcompra}</Text>
        <Text style={styles.productDescription}>{item.descricao}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.backbanner}>
        <Banner1/>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Listagem de Produtos</Text>
          <FlashList
            data={data}
            renderItem={renderItem}
            estimatedItemSize={150}
            onEndReached={fetchData}
            onEndReachedThreshold={0.8}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // Exibe dois itens por linha
          />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f7f7",
    padding: 15
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20
  },
  productContainer: {
    flexDirection: "column",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    marginRight: 10,
    width: 170,
    padding: 5
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    paddingTop: 10,
    paddingLeft: 10
  },
  productImageContainer: {
    width: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  productImage: {
    width: "95%",
    height: "100%",
    resizeMode: "cover"
  },
  noImageText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center"
  },
  productDetails: {
    padding: 10,
    justifyContent: "center"
  },
  productBrand: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5
  },
  productLink: {
    fontSize: 14,
    color: "#0066cc",
    marginBottom: 5
  },
  productDescription: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
    height: 60,
    overflow: "hidden"
  },
  backbanner: {
    backgroundColor: "#F5F5F5	",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 305
  }
});
