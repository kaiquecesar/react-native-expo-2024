import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/welcome.png")}
        styles={styles.headerImg}
      />
      <View>
        <TouchableOpacity onPress={() => router.push("skincare")}>
          <Text>Skinc</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    flex: 11
  },
  headerImg: {
    marginTop: -30,
    marginLeft: -20,
    width: "!00%",
    padding: 10,
    height: 250,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    elevation: 8
  }
});
