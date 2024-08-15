import { Button, Text, View } from "react-native";
import { useAuth } from "../../hooks/Auth";

export default function Home() {
    const { singOut } = useAuth();

    return (
        <View style={{ flex: 1, justifyContent:'center', alignItems: 'center '}}>
            <Text>Home</Text>
            <Button title="Sair" onPress={() => singOut()} />
        </View>
    );
}