import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
export default function Inicial() {
    const navigation = useNavigation();
    function cadastro() {
        navigation.navigate('Cadastro')
    }
    function login() {
        navigation.navigate('Login')
    }
    return (
        <View style={style.centrali}>
            <Button onPress={() => login()} title="Login"/>
            <Button onPress={() => cadastro()} title="Cadastro"/>
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