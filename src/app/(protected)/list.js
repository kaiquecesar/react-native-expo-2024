import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";
import { formatDataToBrazilian } from "../utils/formatData";
import { formatCurrencyBRL } from "../utils/formatCurrent";

export default function List() {
  const [data, setData] = useState([]);
  const { getPayments } = usePaymentsDatabase();
  const [page, setPage] = useState(0); //controlar qual pagina o sistema ja carregou
  const [loading, setLoading] = useState(true); //controlar de esta carregando os dados do banco
  const [hasMore, setHasMore] = useState(true); //constrolar se tem amis itens para carregar

  async function fetchData() {
    if (hasMore === false) return; //se esta flag for falsa, não tem mais dado para carregar
    console.log(page);
    setPage(page + 1);
    //vai buscar no banco de dados os pagamentos
    const payments = await getPayments(page);

    if (payments.lenght < 5) setHasMore(false); //se a quantidade de pagamentos for menor que 5, não tem mais dados para carregar

    setData([...data, ...payments]);
    setLoading(false);
  }

  useEffect(() => {
    //executa a primeira vez a busca de dados
    setPage(0);
    fetchData();
  }, []);

  renderItem = (
    { item } //estrutura da view de catalogar
  ) => (
    <View
      style={{
        flexDirection: "row",
        margin: 5,
        padding: 10,
        margin: 10,
        backgroundColor: "#fff",
        height: 150
      }}
    >
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ fontFamily: "bold", fontSize: 18, textTransform: "uppercase" }}>{item.nome}</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ fontFamily: "regular" }}>
            {formatDataToBrazilian(item.data_pagamento || new Date())}
          </Text>
          <Text>{item.numero_recibo}</Text>
        </View>
      </View>
      <View>
        <Text
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {formatCurrencyBRL(item.valor_pago || 0)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text>Listagem</Text>
      <View style={{ flex: 1 }}>
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
