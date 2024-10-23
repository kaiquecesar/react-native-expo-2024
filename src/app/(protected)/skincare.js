import React, {useState} from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Skincare() {
  const [expanded, setExpanded] = useState({
    normal: false,
    seca: false,
    oleosa: false,
    mista: false,
    sensivel: false,
  });

  const toggleExpand = (key) => {
    setExpanded((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <Image
        style={styles.headerImg}
        source={require("../../assets/img/headerskincare.png")}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          textAling: "center",
          padding: 20,
        }}
      >
        <Text style={styles.title}>DESCUBRA O CUIDADO IDEAL PARA SUA PELE</Text>

        <Text style={styles.text}>
          Bem-vindo(a) à nossa seção de skincare, onde o cuidado começa com o
          conhecimento! Cada pele é única, e entender o seu tipo é o primeiro
          passo para uma rotina de cuidados eficaz. Explore de forma interativa
          os diferentes tipos de pele – normal, oleosa, seca, mista e sensível –
          e descubra os melhores produtos e soluções personalizadas para você.
        </Text>
        <Text style={styles.text}>
          Quer saber mais sobre acne, manchas, rosácea ou envelhecimento
          precoce? Identifique os principais problemas de pele e veja dicas e
          tratamentos recomendados para manter sua pele saudável e radiante.
          Tudo isso de forma dinâmica, com sugestões que se adaptam às suas
          necessidades específicas.
        </Text>

        <Text style={styles.title}>TIPOS DE PELE</Text>

        <View style={styles.caixa}>
          <Text>PELE NORMAL</Text>
          <Image
            source={require("../../assets/img/headerskincare.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Sua pele tem um equilíbrio saudável, nem muito oleosa, nem muito
            seca. Os poros são pequenos e você quase não sente a necessidade de
            cuidados intensivos. No entanto, manter a hidratação é fundamental
            para preservar esse equilíbrio.
          </Text>
        </View>
        <View style={styles.caixa}>
          <Text>PELE SECA</Text>
          <Image
            source={require("../../assets/img/headerskincare.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Se a sua pele frequentemente parece repuxada, descama ou fica
            áspera, é provável que você tenha pele seca. Ela precisa de
            hidratação constante e cuidados mais nutritivos para repor a
            barreira protetora
          </Text>
        </View>
        <View style={styles.caixa}>
          <Text>PELE OLEOSA</Text>
          <Image
            source={require("../../assets/img/headerskincare.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            A sensação de brilho e poros dilatados são comuns para quem tem pele
            oleosa. Mas não se preocupe, com os produtos certos você pode
            controlar essa oleosidade e manter sua pele equilibrada.
          </Text>
        </View>
        <View style={styles.caixa}>
          <Text>PELE MISTA</Text>
          <Image
            source={require("../../assets/img/headerskincare.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Se você nota oleosidade na zona T (testa, nariz e queixo), mas suas
            bochechas são mais secas, sua pele é mista. O segredo está em
            equilibrar os cuidados para atender às diferentes regiões do rosto.
          </Text>
        </View>
        <View style={styles.caixa}>
          <Text>PELE SENSÍVEL</Text>
          <Image
            source={require("../../assets/img/headerskincare.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Sua pele fica irritada facilmente? Produtos mais fortes podem causar
            vermelhidão ou coceira? A pele sensível precisa de produtos suaves e
            específicos, além de muito carinho!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImg: {
    marginTop: -10,
    marginRight: 0,
    width: 420,
    height: 250,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 8,
  },

  title: {
    fontSize: 35,
    color: "#1e5796",
    fontFamily: "bold",
    textShadowColor: "#000",
    textAlign: "center",
  },

  text: {
    fontSize: 17,
    color: "#000",
    fontFamily: "regular",
    lineHeight: 25,
    textShadowColor: "#000",
    textAlign: "justify",
    marginVertical: 20,
  },

  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginVertical: 20,
  },

  caixa: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 8,
  },
});
