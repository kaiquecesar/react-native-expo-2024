import { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner1() {
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
        justifyContent: "center"
    },
    page: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        overflow: "hidden"
    },
    image: {
        width: "99%",
        height: "99%",
        borderRadius: 8,
    },
    bulletContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    bullet: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#C0C0C0",
        margin: 5,
    },
    activeBullet: {
        backgroundColor: "#2d2a2a",
        width: 13,
        height: 13,
    },
});
