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
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center", backgroundColor: "#FE9A38" }}
    >
      <Image
        style={styles.headerImg}
        source={require("../../assets/img/cabelo/headercabelo.png")}
      />
      <Image
        style={styles.titleImg}
        source={require("../../assets/img/cabelo/cabelos.png")}
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
        Seu cabelo merece o melhor cuidado! Nesta seção, você pode explorar de forma interativa os diferentes tipos de cabelo – liso, ondulado, cacheado, crespo e misto – 
        e descobrir produtos e rotinas ideais para suas necessidades.
        </Text>
        <Text style={styles.text}>
        Tem preocupações com queda de cabelo, porosidade, caspas, pontas duplas ou frizz? Nós ajudamos você a 
        identificar os problemas mais comuns e oferecemos soluções personalizadas, adaptadas ao seu tipo de fio.
        </Text>

        <Image
        style={styles.titleTipos}
        source={require("../../assets/img/cabelo/cuidados.png")}
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
    marginTop: -8,
    marginRight: 120,
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
    color: "#fff",
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
    marginTop: -190,
    marginRight: 0
  },
  titleTipos: {
    width: 395,
    height: 380,
    resizeMode: "contain",
    marginVertical: -170,
    alignSelf: "center",
    marginTop: -130,
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
