import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({});

export function FontProvider({ children }) {

  const [loaded, error] = useFonts ({
    regular: require("../../assets/fonts/Rubik-Regular.ttf"),
    bold: require("../../assets/fonts/Rubik-Bold.ttf"),
    italic: require("../../assets/fonts/Rubik-Italic.ttf"), 
    light: require("../../assets/fonts/Rubik-Light.ttf"),
    medium: require("../../assets/fonts/Rubik-Medium.ttf"),
    semibold: require("../../assets/fonts/Rubik-SemiBold.ttf"),
    black: require("../../assets/fonts/Rubik-Black.ttf"),
  });

  if (!loaded && !error) {
    <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
      <Text style={{fontSize: 28, marginTop:15}}>Carregando as fontes</Text>
      <ActivityIndicator size="large" color="#0000ff"/>;
    </View>
  } 

  return <FontContext.Provider value={{loaded}}>{children}</FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}