import { createStackNavigator } from "@react-navigation/stack";
import Inicial from "../screens/Inicial";
import Login from "../screens/login";
import Cadastro from "../screens/cadastro";
import Home from "../screens/home";

export default function Navegacao() {
    var Stack = createStackNavigator()
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inicial"component={Inicial}
            options={{headerShown: false}}/>
            <Stack.Screen name="Login"component={Login}
            options={{headerShown: false}}/>
            <Stack.Screen name="Cadastro"component={Cadastro}
            options={{headerShown: false}}/>
            <Stack.Screen name="Home"component={Home}
            options={{headerShown: false}}/>
        </Stack.Navigator>
        
    )
}