import { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
    const [page, setPage] = useState(0);

    const onPageSelected = (e) => {
        setPage(e.nativeEvent.position);
    };

    return (
        //<ImageBackground source={require("../../assets/img/signin3.png")} style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.backbanner}></View>
            <PagerView initialPage={0} style={styles.content} onPageSelected={onPageSelected}>
                <View key="1" style={styles.page}>
                    <Image source={require("../../assets/img/carrosel/creamy.png")} style={styles.image}/>
                </View>
                <View key="2" style={styles.page}>
                    <Image source={require("../../assets/img/carrosel/sallve.png")} style={styles.image}/>
                </View>
                <View key="3" style={styles.page}>
                    <Image source={require("../../assets/img/carrosel/principia.png")} style={styles.image}/>
                </View>
            </PagerView>
            <View style={styles.bulletContent}>
                <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
            </View>
        </View>
        //</ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
    },
    content: {
        height: 230,
        width: "98%",
        alignItems: "center",
        justifyContent: "center",
    },
    page: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    bulletContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    bullet: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#999",
        margin: 5,
        transition: "background-color 0.3s",
    },
    activeBullet: {
        backgroundColor: "#000",
    },
    backbanner: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 300,
        backgroundColor: "#1e5796",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    }
});
