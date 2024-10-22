import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Skincare() {
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
        <Text style={styles.title}>SKINCARE</Text>
        <Text>
          ÇOWDCINDCNWDOCNWOBQUÇWUIEDCGUIDBCQIYVCUQWEHCUQWEBCIVÇUIFDVBIUEQCVBICVRICVVC
          ÕWCGOBVO 3UCGVU EWCUVW CIU WÇU EWUCVWE ÇIUCV EICV WECVWEICECVÇI WECV
          IWEYCVWEYCVYWIECÇIYW EVCIW EWCOUUVWBUI EVIVWCIYW
          EUCVWIEYCVÇWEIYQIYVCUQWEHCUQWEBCIVÇUIFDVBIUEQCVBICVRICVVC ÕWCGOBVO
          3UCGVU EWCUVW CIU WÇU EWUCVWE ÇIUCV EICV WECVWEICECVÇI WECV
          IWEYCVWEYCVYWIECÇIYW EVCIW EWCOUUVWBUI EVIVWCIYW
          EUCVWIEYCVÇWEIYQIYVCUQWEHCUQWEBCIVÇUIFDVBIUEQCVBICVRICVVC ÕWCGOBVO
          3UCGVU EWCUVW CIU WÇU EWUCVWE ÇIUCV EICV WECVWEICECVÇI WECV
          IWEYCVWEYCVYWIECÇIYW EVCIW EWCOUUVWBUI EVIVWCIYW
          EUCVWIEYCVÇWEIYQIYVCUQWEHCUQWEBCIVÇUIFDVBIUEQCVBICVRICVVC ÕWCGOBVO
          3UCGVU EWCUVW CIU WÇU EWUCVWE ÇIUCV EICV WECVWEICECVÇI WECV
          IWEYCVWEYCVYWIECÇIYW EVCIW EWCOUUVWBUI EVIVWCIYW
          EUCVWIEYCVÇWEIYQIYVCUQWEHCUQWEBCIVÇUIFDVBIUEQCVBICVRICVVC ÕWCGOBVO
          3UCGVU EWCUVW CIU WÇU EWUCVWE ÇIUCV EICV WECVWEICECVÇI WECV
          IWEYCVWEYCVYWIECÇIYW EVCIW EWCOUUVWBUI EVIVWCIYW
          EUCVWIEYCVÇWEIYQIYVCUQWEHCUQWEBCIVÇUIFDVBIUEQCVBICVRICVVC ÕWCGOBVO
          3UCGVU EWCUVW CIU WÇU EWUCVWE ÇIUCV EICV WECVWEICECVÇI WECV
          IWEYCVWEYCVYWIECÇIYW EVCIW EWCOUUVWBUI EVIVWCIYW
          EUCVWIEYCVÇWEIYQIYVCUQWEHCUQWEBCIVÇUIFDVBIUEQCVBICVRICVVC ÕWCGOBVO
          3UCGVU EWCUVW CIU WÇU EWUCVWE ÇIUCV EICV WECVWEICECVÇI WECV
          IWEYCVWEYCVYWIECÇIYW EVCIW EWCOUUVWBUI EVIVWCIYW EUCVWIEYCVÇWEIY
        </Text>
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
});
