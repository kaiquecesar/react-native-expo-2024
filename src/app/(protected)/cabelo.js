import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function Skincare() {
  const [selectedSection, setSelectedSection] = useState("problemas");

  const data = [
    {
      key: "caspas",
      title: "Caspas",
      description:
        "Equilibrada e saudável, com pouca oleosidade. Perfeita para manter uma rotina básica de cuidados.",
      image: require("../../assets/img/cabelo/caspas.png"),
    },
    {
      key: "frizz",
      title: "Frizz",
      description:
        "Necessita de hidratação constante. Cuidados mais nutritivos ajudam a repor a barreira protetora.",
      image: require("../../assets/img/cabelo/frizz.png"),
    },
    {
      key: "queda",
      title: "Queda Capilar",
      description:
        "Produz excesso de sebo. Com os produtos certos, você pode equilibrar a oleosidade.",
      image: require("../../assets/img/cabelo/queda.png"),
    },
    {
      key: "porosidade",
      title: "Porosidade",
      description:
        "Oleosidade na zona T e bochechas mais secas. Equilibre os cuidados para atender às necessidades.",
      image: require("../../assets/img/cabelo/porosidade.png"),
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: "#FE9A38",
      }}
    >
      <Image
        style={styles.headerImg}
        source={require("../../assets/img/cabelo/headercabelo.png")}
      />
      <Image
        style={styles.titleImg}
        source={require("../../assets/img/cabelo/cabelos.png")}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.text1}>
          Seu cabelo merece o melhor cuidado! Nesta seção, você pode explorar de
          forma interativa os diferentes tipos de cabelo – liso, ondulado,
          cacheado, crespo e misto – e descobrir produtos e rotinas ideais para
          suas necessidades.
        </Text>
        <Text style={styles.text2}>
          Tem preocupações com queda de cabelo, porosidade, caspas, pontas
          duplas ou frizz? Nós ajudamos você a identificar os problemas mais
          comuns e oferecemos soluções personalizadas, adaptadas ao seu tipo de
          fio.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setSelectedSection("problemas")}>
            <Image
              source={require("../../assets/img/cabelo/problemas.png")}
              style={styles.botoes}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedSection("tipo1")}>
            <Image
              source={require("../../assets/img/cabelo/c1.png")}
              style={styles.botoes}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedSection("tipo2")}>
            <Image
              source={require("../../assets/img/cabelo/c2.png")}
              style={styles.botoes}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedSection("tipo3")}>
            <Image
              source={require("../../assets/img/cabelo/c3.png")}
              style={styles.botoes}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedSection("tipo4")}>
            <Image
              source={require("../../assets/img/cabelo/c4.png")}
              style={styles.botoes}
            />
          </TouchableOpacity>
        </View>

        {selectedSection === "problemas" && (
          <>
            <Image
              style={styles.titleCuidados}
              source={require("../../assets/img/cabelo/cuidados.png")}
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              {data.map((item) => (
                <View key={item.key} style={styles.problemCard}>
                  <Image source={item.image} style={styles.problemImage} />
                  <Text style={styles.problemTitle}>{item.title}</Text>
                  <Text style={styles.problemDescription}>
                    {item.description}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </>
        )}

        {selectedSection !== "problemas" && (
          <Text style={styles.placeholderText}>
            Conteúdo para {selectedSection} em desenvolvimento.
          </Text>
        )}
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
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 8,
  },
  text1: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "regular",
    lineHeight: 25,
    textAlign: "justify",
    marginTop: 30,
    marginBottom: 7,
  },
  text2: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "regular",
    lineHeight: 25,
    textAlign: "justify",
  },
  titleImg: {
    width: 395,
    height: 380,
    resizeMode: "contain",
    marginVertical: -170,
    alignSelf: "center",
    marginTop: -190,
    marginRight: 0,
  },
  titleCuidados: {
    width: 395,
    height: 380,
    resizeMode: "contain",
    marginVertical: -170,
    alignSelf: "center",
    marginTop: -130,
    marginRight: 0,
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  problemCard: {
    width: 300,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    elevation: 5,
    marginTop: 40,
  },
  problemImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  problemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  problemDescription: {
    fontSize: 14,
    color: "#555",
    textAlign: "justify",
  },
  botoes: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
});
