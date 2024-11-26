import { router } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
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
                </View>
                <Button
                    title="Voltar"
                    color="#FF69B4"
                    onPress={() => router.push("signIn")}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "linear-gradient(135deg, #b3cdd1, #f4c2c2)", // Gradiente de fundo
    },
    scrollContent: {
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Fundo translúcido
        padding: 20,
        borderRadius: 15,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#FF69B4", // Rosa neon
        textShadowColor: "#FF69B4",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: "justify",
        color: "#333",
        marginBottom: 16,
    },
});
