import { router } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function About() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center "}}>
            <Text style={styles.title}>Sobre Nós</Text>
            <Text style={styles.body}>
                Nosso aplicativo foi criado com o objetivo de tornar o autocuidado mais acessível e personalizado para todos. 
                Aqui, você encontrará um catálogo abrangente sobre estilo, cuidados com a pele, cabelo, e muito mais.
            </Text>
            <Text style={styles.body}>
                Sabemos que cada pessoa tem necessidades e preferências únicas, por isso, oferecemos orientações detalhadas e dicas especializadas para ajudar você a descobrir o que funciona melhor para o seu bem-estar.
            </Text>
            <Text style={styles.body}>
                Queremos inspirar e capacitar você a explorar novas maneiras de cuidar de si mesmo, elevando sua rotina de autocuidado a um novo nível.
                Seja através de dicas sobre moda, tratamentos de pele ou cuidados capilares, estamos aqui para guiar sua jornada de autoexpressão e confiança.
            </Text>
            <Text style={styles.body}>
                Acreditamos que o autocuidado não é apenas sobre aparência, mas também sobre se sentir bem por dentro e por fora.
                Explore, descubra e cuide de você com o nosso apoio.
            </Text>
            <Button title="Voltar" onPress={() => {router.push("signIn")}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    buttom: {
        backgroundColor: "#000",
        color: "#FFF",
        padding: 10,
        borderRadius: 5,
        width: 100
    },
    title: {
        fontFamily: "bold",
        fontSize: 25,
        marginLeft: 140,
        marginTop: -90,
    },
    body: {
        fontFamily: "regular",
        fontSize: 15,
        marginHorizontal: 20,
        marginTop: 20,
        lineHeight: 20,
        textAlign: "justify",
    },
});