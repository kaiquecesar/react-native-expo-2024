import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/Auth/index';


function CustomDrawerContent(props) {
  const { user, singOut } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 30, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0", paddingVertical: 10}}>
        <Image 
        source={{ uri:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" }}
        style={{ width: 100, height: 100, borderRadius: 50, margin: 10 }}/>
        <Text style={{ fontSize: 20, textAlign: "center", fontFamily: "regular"}}>
          {user?.user?.name}       
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={() => singOut()}
        style={{
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          margin: 10,
          backgroundColor: "#0000ff",
        }}>
        <Text style={{ color: "white", fontFamily: "bold"}}>Deslogar</Text>
      </TouchableOpacity>
    </View>
    
  );
}
const DrawerLayout = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="index" options={{
          drawerLabel: 'Principal',
          headerTitle: 'Principal',
          drawerIcon: () => (
            <Ionicons name="home-outline" size={20} color="black" />
          ),
        }} />
        <Drawer.Screen name="list" options={{
          drawerLabel: "Listagem",
          headerTitle: "Listagem",
          drawerIcon: () => (
            <Ionicons name="list-outline" size={20} color="black" />
          ),
        }} />
        <Drawer.Screen name="payment" options={{
          drawerLabel: "Pagamentos",
          headerTitle: "Pagamentos",
          drawerIcon: () => (
            <Ionicons name="code-download-sharp" size={20} color="black" />
          ),
        }} />
        <Drawer.Screen name="about" options={{
          drawerLabel: "Sobre",
          headerTitle: "Sobre",
          drawerIcon: () => (
            <Ionicons name="information-circle-outline" size={20} color="black" />
          ),
        }} />
  
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default function Layout() {
  return DrawerLayout();
}