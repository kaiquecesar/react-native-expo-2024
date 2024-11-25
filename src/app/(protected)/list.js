import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";
import { formatDataToBrazilian } from "../utils/formatData";
import { formatCurrencyBRL } from "../utils/formatCurrent";

export default function List() {
  const [data, setData] = useState([]);
  const { getPayments } = usePaymentsDatabase();
  const [page, setPage] = useState(0); // Controla qual página já carregou
  const [loading, setLoading] = useState(true); // Controla se está carregando os dados do banco
  const [hasMore, setHasMore] = useState(true); // Controla se há mais itens para carregar

  async function fetchData() {
    if (!hasMore) return; // Se não há mais dados, retorna
    setPage(page + 1);
    const payments = await getPayments(page);

    if (payments.length < 5) setHasMore(false); // Se menos de 5, não há mais dados
    setData((prevData) => [...prevData, ...payments]);
    setLoading(false);
  }

  useEffect(() => {
    // Busca inicial de dados
    setPage(0);
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.itemName}>{item.nome}</Text>
        <View style={styles.row}>
          <Text style={styles.text}>
            {formatDataToBrazilian(item.data_pagamento || new Date())}
          </Text>
          <Text style={styles.text}>{item.numero_recibo}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>
          {formatCurrencyBRL(item.valor_pago || 0)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Pagamentos</Text>
      <View style={styles.listContainer}>
        <FlashList
          data={data}
          renderItem={renderItem}
          estimatedItemSize={50}
          onEndReached={fetchData}
          onEndReachedThreshold={0.8}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  listContainer: {
    flex: 1,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 5,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    gap: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#444",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 14,
    color: "#666",
  },
  priceContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2a9d8f",
  },
});
