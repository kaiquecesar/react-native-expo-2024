import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";

export default function List() {
  const [data, setData] = useState([]);
  const { getPayments } = usePaymentsDatabase();

  async function fetchData() {
    //vai buscar no banco de dados os pagamentos
    const payments = await getPayments();
    setData(payments);
  }

  useEffect(() => {
    //executa a primeira vez a busca de dados
    fetchData();
  }, []);

  renderItem = (
    { item } //estrutura da view de catalogar
  ) => (
    <View style={{ flexDirection: "row", margin: 5 }}>
      <View style={{ flex: 1 }}>
        <Text>{item.nome}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>{item.data_pagamento}</Text>
          <Text>{item.numero_recibo}</Text>
        </View>
      </View>
      <View>
        <Text>{item.valor_pago}</Text>
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
          estimatedItemSize={200}
        />
      </View>
    </View>
  );
}
