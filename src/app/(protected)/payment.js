import { router } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

export default function Payment() {
    const [valor, setValor] = useState("0,00");

    return (
        <View style={styles.content}>
            <View style={styles.inputView}>
            <Ionicons name="wallet-outline" size={24} color="black" />
                <TextInput placeholder="Valor" keyboardType="decimal-pad" 
                style={styles.inputValor} 
                value={valor} onChangeText={setValor}/>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder="Usuário"/>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder="Data"/>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder="Observações"/>
            </View>
            <View style={styles.contentButtons}>
                <Button title="Salvar"/>
                <Button title="Continuar"/>
                <Button title="Cancelar" onPress={() => router.back()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },

    inputView: {
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        margin: 10, 
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    contentButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: "100%",
        padding: 10,
    },

    inputValor: {
        flex: 1,
        textAlign: "right",
        padding: 10,
    },
});