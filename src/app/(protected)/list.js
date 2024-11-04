import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";

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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center " }}>
      <Text>Listagem</Text>
      {data.length > 0 &&
        data.map((item, index) => {
          return <Text key={index}>{item.id}</Text>;
        })}
    </View>
  );
}
