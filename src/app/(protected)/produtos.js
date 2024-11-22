import { useEffect, useState } from "react";
import { Alert, Button, ScrollView, Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useProductsDatabase } from "../../database/useProductsDatabase";
import { FlashList } from "@shopify/flash-list";
import { formatDataToBrazilian } from "../utils/formatData";
import { formatCurrencyBRL } from "../utils/formatCurrent";
import { Banner } from "../../components/Banner";
import { usePickImage } from "../utils/pickImage";

export default function List() {
  const [data, setData] = useState([]);
  const { getPayments } = usePaymentsDatabase();
  const { getProducts } = useProductsDatabase();
  const [page, setPage] = useState(0); //controlar qual pagina o sistema ja carregou
  const [loading, setLoading] = useState(true); //controlar de esta carregando os dados do banco
  const [hasMore, setHasMore] = useState(true); //constrolar se tem amis itens para carregar

  async function fetchData() {
    if (hasMore === false) return; //se esta flag for falsa, não tem mais dado para carregar
    console.log(page);
    setPage(page + 1);
    //vai buscar no banco de dados os pagamentos
    const products = await getProducts(page);

    if (products.lenght < 5) setHasMore(false); //se a quantidade de pagamentos for menor que 5, não tem mais dados para carregar

    setData([...data, ...products]);
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
    <View>
      <View>
        <Text>{item.pro_nome}</Text>
        <View>
          <Text>{item.marca}</Text>
          <Text>{item.linkcompra}</Text>
        </View>
      </View>
      <View>
        <Text>{item.descricao}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Banner />
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
    </ScrollView>
  );
}
