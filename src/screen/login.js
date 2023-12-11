import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
    const navigation = useNavigation();
    function home() {
        navigation.navigate('Home')
    }
    return (
        <View style={style.centrali}>
             <Text>Digitar a sua Nome:</Text>
             <Text>Digitar o seu Email:</Text> 
             <Text>Digitar a sua Senha:</Text>
          
            <Button onPress={() => home()} title="Entrar"/>
        </View>
    )
}
const style = StyleSheet.create({
    centrali:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})