import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/Auth/index';


function CustomDrawerContent(props) {
  const { singOut } = useAuth();

  return (
    <View style={{ flex: 1 }}>
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
     <Button title="Sair" style={{ height: 100 }}/>
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