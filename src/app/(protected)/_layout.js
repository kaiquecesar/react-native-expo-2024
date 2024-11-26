import {
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/Auth/index";

function CustomDrawerContent(props) {
  const { user, singOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          source={require("../../assets/img/stylessence.png")}
          style={styles.profileImage}
        />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity onPress={() => singOut()} style={styles.signOutButton}>
        <Text style={styles.signOutText}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Principal",
            headerTitle: "Principal",
            drawerIcon: () => <Ionicons name="home" size={24} color="black" />
          }}
        />
        <Drawer.Screen
          name="skincare"
          options={{
            drawerLabel: "SkinCare",
            headerTitle: "SkinCare",
            drawerIcon: () => <FontAwesome6 name="spray-can-sparkles" size={24} color="black" />
          }}
        />
        <Drawer.Screen
          name="cabelo"
          options={{
            drawerLabel: "Cabelos",
            headerTitle: "Cabelos",
            drawerIcon: () => <MaterialCommunityIcons name="face-woman-shimmer" size={24} color="black" />
          }}
        />
        <Drawer.Screen
          name="produtos"
          options={{
            drawerLabel: "Produtos",
            headerTitle: "Produtos",
            drawerIcon: () => <Ionicons name="pricetags" size={24} color="black" />
          }}
        />
        <Drawer.Screen
          name="cadastro"
          options={{
            drawerLabel: "Cadastro",
            headerTitle: "Cadastro",
            drawerIcon: () => <Ionicons name="add-circle-sharp" size={24} color="black" />
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "Listagem",
            headerTitle: "Listagem",
            drawerIcon: () => <Ionicons name="list" size={24} color="black" />
          }}
        />
        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: "Pagamentos",
            headerTitle: "Pagamentos",
            drawerIcon: () => <MaterialIcons name="payments" size={24} color="black" />
          }}
        />
        <Drawer.Screen
          name="details"
          options={{
            drawerLabel: "Detalhes",
            headerTitle: "Detalhes",
            drawerIcon: () => <Ionicons name="sparkles" size={24} color="black" />
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default function Layout() {
  return DrawerLayout();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Cor de fundo clara
  },
  userInfoContainer: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", // Cor clara para o limite
  },
  profileImage: {
    width: 250,
    height: 250,
  },
  username: {
    fontSize: 24, // Aumentando o tamanho da fonte
    textAlign: "center",
    color: "#333", // Cor escura para o nome do usuário
    fontFamily: "regular",
  },
  signOutButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    margin: 10,
    backgroundColor: "#c23357", // Cor de fundo vibrante para o botão
    borderRadius: 8,
  },
  signOutText: {
    color: "white",
    fontFamily: "bold",
    fontSize: 18, // Aumentando o tamanho da fonte
  },
});
