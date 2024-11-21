import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Skincare() {
  const [expanded, setExpanded] = useState({
    normal: false,
    seca: false,
    oleosa: false,
    mista: false,
    sensivel: false
  });

  const toggleExpand = (key) => {
    setExpanded((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <Image
        style={styles.headerImg}
        source={require("../../assets/img/skincare/headerskincare.png")}
      />
      <Image
        style={styles.titleImg}
        source={require("../../assets/img/skincare/tituloo.png")}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          textAling: "center",
          padding: 20
        }}
      >
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

        <Image
        style={styles.titleTipos}
        source={require("../../assets/img/skincare/tiposdepele.png")}
        />

        <View style={{flexDirection: "row"}}>
          <View>
          <TouchableOpacity
            style={styles.caixa}
            onPress={() => toggleExpand("normal")}
          >
            <View style={styles.row}>
              <Text style={styles.caixaTitle}>PELE NORMAL</Text>
              <Ionicons
                name={expanded.normal ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </View>
            <Image
              source={require("../../assets/img/skincare/pelenormal.png")}
              style={styles.imageTipos}
            />

            {expanded.normal && (
              <View>
                <Text style={styles.text}>
                  Se a sua pele frequentemente parece repuxada, descama ou fica
                  áspera, é provável que você tenha pele seca. Ela precisa de
                  hidratação constante e cuidados mais nutritivos para repor a
                  barreira protetora
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity
            style={styles.caixa}
            onPress={() => toggleExpand("seca")}
          >
            <View style={styles.row}>
              <Text style={styles.caixaTitle}>PELE SECA</Text>
              <Ionicons
                name={expanded.seca ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </View>
            <Image
              source={require("../../assets/img/skincare/peleseca.png")}
              style={styles.imageTipos}
            />

            {expanded.seca && (
              <View>
                <Text style={styles.text}>
                  Se a sua pele frequentemente parece repuxada, descama ou fica
                  áspera, é provável que você tenha pele seca. Ela precisa de
                  hidratação constante e cuidados mais nutritivos para repor a
                  barreira protetora
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View>
          <TouchableOpacity
            style={styles.caixa}
            onPress={() => toggleExpand("oleosa")}
          >
            <View style={styles.row}>
              <Text style={styles.caixaTitle}>PELE OLEOSA</Text>
              <Ionicons
                name={expanded.oleosa ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </View>
            <Image
              source={require("../../assets/img/skincare/peleoleosa.png")}
              style={styles.imageTipos}
            />

            {expanded.oleosa && (
              <View>
                <Text style={styles.text}>
                  A sensação de brilho e poros dilatados são comuns para quem
                  tem pele oleosa. Mas não se preocupe, com os produtos certos
                  você pode controlar essa oleosidade e manter sua pele
                  equilibrada.
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.caixa}
            onPress={() => toggleExpand("mista")}
          >
            <View style={styles.row}>
              <Text style={styles.caixaTitle}>PELE MISTA</Text>
              <Ionicons
                name={expanded.mista ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </View>
            <Image
              source={require("../../assets/img/skincare/pelemista.png")}
              style={styles.imageTipos}
            />

            {expanded.mista && (
              <View>
                <Text style={styles.text}>
                  Se você nota oleosidade na zona T (testa, nariz e queixo), mas
                  suas bochechas são mais secas, sua pele é mista. O segredo
                  está em equilibrar os cuidados para atender às diferentes
                  regiões do rosto.
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
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
      height: 4
    },
    shadowOpacity: 0.3,
    elevation: 8
  },

  title: {
    fontSize: 35,
    color: "#1e5796",
    fontFamily: "bold",
    textShadowColor: "#000",
    textAlign: "center"
  },

  text: {
    fontSize: 17,
    color: "#000",
    fontFamily: "regular",
    lineHeight: 25,
    textShadowColor: "#000",
    textAlign: "justify",
    marginVertical: 20
  },

  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginVertical: 20
  },

  imageTipos: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 5,
    alignSelf: "center"
  },

  caixa: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    elevation: 8,
    width: "98%"
  },
  titleImg: {
    width: 395,
    height: 380,
    resizeMode: "contain",
    marginVertical: -170,
    alignSelf: "center",
    marginTop: -199,
    marginRight: 0
  },
  titleTipos: {
    width: 395,
    height: 380,
    resizeMode: "contain",
    marginVertical: -170,
    alignSelf: "center",
    marginTop: -199,
    marginRight: 0
  },
  row: {
    flexDirection: "row",
    alingItems: "center"
  },
  caixaTitle: {
    fontSize: 22,
    color: "#000",
    fontFamily: "medium",
    width: 200
  }
});
