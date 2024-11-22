import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5
} from "@expo/vector-icons";

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
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.headerImg}
        source={require("../../assets/img/skincare/headerskincare.png")}
      />
      <Image
        style={styles.titleImg}
        source={require("../../assets/img/skincare/tituloo.png")}
      />
      <Text style={styles.text1}>
        Bem-vindo(a) à nossa seção de skincare, onde o cuidado começa com o
        conhecimento! Cada pele é única, e entender o seu tipo é o primeiro
        passo para uma rotina de cuidados eficaz. Explore de forma interativa os
        diferentes tipos de pele – normal, oleosa, seca, mista e sensível – e
        descubra os melhores produtos e soluções personalizadas para você.
      </Text>
      <Text style={styles.text2}>
        Quer saber mais sobre acne, manchas, rosácea ou envelhecimento precoce?
        Identifique os principais problemas de pele e veja dicas e tratamentos
        recomendados para manter sua pele saudável e radiante. Tudo isso de
        forma dinâmica, com sugestões que se adaptam às suas necessidades
        específicas.
      </Text>

      <Image
        style={styles.titleTipos}
        source={require("../../assets/img/skincare/tiposdepele.png")}
      />

      <View style={styles.cardContainer}>
        {/* Pele Normal */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => toggleExpand("normal")}
        >
          <View style={styles.cardHeader}>
            <Ionicons name="happy" size={30} color="#6B8E23" />
            <Text style={styles.cardTitle}>Pele Normal</Text>
            <Ionicons
              name={expanded.normal ? "chevron-up" : "chevron-down"}
              size={24}
              color="black"
            />
          </View>
          <Image
            source={require("../../assets/img/skincare/pelenormal.png")}
            style={styles.cardImage}
          />
          {expanded.normal && (
            <Text style={styles.cardDescription}>
              Equilibrada e saudável, com pouca oleosidade. Perfeita para manter
              uma rotina básica de cuidados.
            </Text>
          )}
        </TouchableOpacity>

        {/* Pele Seca */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => toggleExpand("seca")}
        >
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="water-off"
              size={30}
              color="#4682B4"
            />
            <Text style={styles.cardTitle}>Pele Seca</Text>
            <Ionicons
              name={expanded.seca ? "chevron-up" : "chevron-down"}
              size={24}
              color="black"
            />
          </View>
          <Image
            source={require("../../assets/img/skincare/peleseca.png")}
            style={styles.cardImage}
          />
          {expanded.seca && (
            <Text style={styles.cardDescription}>
              Necessita de hidratação constante. Cuidados mais nutritivos ajudam
              a repor a barreira protetora.
            </Text>
          )}
        </TouchableOpacity>

        {/* Pele Oleosa */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => toggleExpand("oleosa")}
        >
          <View style={styles.cardHeader}>
            <Ionicons name="water" size={30} color="#FFD700" />
            <Text style={styles.cardTitle}>Pele Oleosa</Text>
            <Ionicons
              name={expanded.oleosa ? "chevron-up" : "chevron-down"}
              size={24}
              color="black"
            />
          </View>
          <Image
            source={require("../../assets/img/skincare/peleoleosa.png")}
            style={styles.cardImage}
          />
          {expanded.oleosa && (
            <Text style={styles.cardDescription}>
              Produz excesso de sebo. Com os produtos certos, você pode
              equilibrar a oleosidade.
            </Text>
          )}
        </TouchableOpacity>

        {/* Pele Mista */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => toggleExpand("mista")}
        >
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="shape-outline"
              size={30}
              color="#FF4500"
            />
            <Text style={styles.cardTitle}>Pele Mista</Text>
            <Ionicons
              name={expanded.mista ? "chevron-up" : "chevron-down"}
              size={24}
              color="black"
            />
          </View>
          <Image
            source={require("../../assets/img/skincare/pelemista.png")}
            style={styles.cardImage}
          />
          {expanded.mista && (
            <Text style={styles.cardDescription}>
              Oleosidade na zona T e bochechas mais secas. Equilibre os cuidados
              para atender às necessidades.
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <Image
        style={styles.titleTipos}
        source={require("../../assets/img/skincare/problemaspele.png")}
      />

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.problemScrollContainer}
        >
          {/* Acne */}
          <View style={[styles.problemCard, styles.problemCardAcne]}>
            <Image
              source={require("../../assets/img/skincare/acne.png")}
              style={styles.problemImage}
            />
            <Text style={styles.problemTitle}>Acne</Text>
            <Text style={styles.problemDescription}>
              O que é? Acne é causada pelo acúmulo de oleosidade, células mortas
              e bactérias nos poros, resultando em espinhas e cravos.
            </Text>
            <Text style={styles.problemListTitle}>Causas principais:</Text>
            <Text style={styles.problemList}>• Alterações hormonais</Text>
            <Text style={styles.problemList}>• Excesso de oleosidade</Text>
            <Text style={styles.problemList}>
              • Alimentação rica em açúcar e gorduras
            </Text>
          </View>

          {/* Melasma */}
          <View style={[styles.problemCard, styles.problemCardMelasma]}>
            <Image
              source={require("../../assets/img/skincare/melasma.png")}
              style={styles.problemImage}
            />
            <Text style={styles.problemTitle}>Melasma</Text>
            <Text style={styles.problemDescription}>
              O que é? Melasma são manchas escuras que surgem geralmente no
              rosto devido ao excesso de melanina.
            </Text>
            <Text style={styles.problemListTitle}>Causas principais:</Text>
            <Text style={styles.problemList}>
              • Exposição solar sem proteção
            </Text>
            <Text style={styles.problemList}>• Alterações hormonais</Text>
            <Text style={styles.problemList}>• Predisposição genética</Text>
          </View>

          {/* Rosácea */}
          <View style={[styles.problemCard, styles.problemCardRosacea]}>
            <Image
              source={require("../../assets/img/skincare/rosacea.png")}
              style={styles.problemImage}
            />
            <Text style={styles.problemTitle}>Rosácea</Text>
            <Text style={styles.problemDescription}>
              O que é? Vermelhidão constante com bolinhas semelhantes à acne.
              Comum em pele sensível.
            </Text>
            <Text style={styles.problemListTitle}>Causas principais:</Text>
            <Text style={styles.problemList}>• Fatores genéticos</Text>
            <Text style={styles.problemList}>
              • Exposição ao calor, álcool ou alimentos apimentados
            </Text>
            <Text style={styles.problemList}>• Excesso de sol</Text>
          </View>

          {/* Textura Irregular */}
          <View style={[styles.problemCard, styles.problemCardTextura]}>
            <Image
              source={require("../../assets/img/skincare/texturairregular.png")}
              style={styles.problemImage}
            />
            <Text style={styles.problemTitle}>Textura Irregular</Text>
            <Text style={styles.problemDescription}>
              O que é? Pele áspera, poros dilatados ou ondulações causadas por
              danos ou acúmulo de células mortas.
            </Text>
            <Text style={styles.problemListTitle}>Causas principais:</Text>
            <Text style={styles.problemList}>• Excesso de células mortas</Text>
            <Text style={styles.problemList}>
              • Exposição solar sem proteção
            </Text>
            <Text style={styles.problemList}>• Cicatrizes de acne</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 20
  },
  headerImg: {
    marginTop: -30,
    marginLeft: -20,
    width: 400,
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
  titleImg: {
    width: 395,
    height: 380,
    resizeMode: "contain",
    marginVertical: -170,
    alignSelf: "center",
    marginTop: -192,
    marginRight: 0
  },
  titleTipos: {
    width: 395,
    height: 380,
    resizeMode: "contain",
    marginVertical: -170,
    alignSelf: "center",
    marginTop: -150,
    marginBottom: -150
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "48%",
    marginBottom: 20,
    marginTop: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    elevation: 5
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    flex: 1
  },
  cardImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginVertical: 10
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    textAlign: "justify"
  },
  text1: {
    fontSize: 15,
    color: "#000",
    fontFamily: "regular",
    lineHeight: 25,
    textAlign: "justify",
    marginTop: 20,
    marginBottom: 20
  },
  text2: {
    fontSize: 15,
    color: "#000",
    fontFamily: "regular",
    lineHeight: 25,
    textAlign: "justify",
    marginBottom: 20
  },
  problemScrollContainer: {
    paddingHorizontal: 10,
    gap: 15
  },
  problemCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    width: 300,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginBottom: 20
  },
  problemCardAcne: {
    backgroundColor: "#FDECEC", 
  },
  problemCardMelasma: {
    backgroundColor: "#FFF4E6", 
  },
  problemCardRosacea: {
    backgroundColor: "#EDE7F6", 
  },
  problemCardTextura: {
    backgroundColor: "#E3F6F5",
  },
  problemImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },  
  problemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
    textAlign: "center"
  },
  problemDescription: {
    fontSize: 15,
    color: "#555",
    marginBottom: 10,
    textAlign: "justify"
  },
  problemListTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#444"
  },
  problemList: {
    fontSize: 14,
    color: "#555",
    marginLeft: 10,
    marginBottom: 5
  }
});
