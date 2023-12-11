import { createStackNavigator } from "@react-navigation/stack";
import Login from '/home/aluno/ppdm/Ppdm-2023-Tiago/src/screens/Login.js'
import Inicial from "/home/aluno/ppdm/Ppdm-2023-Tiago/src/screens/Inicial.js";
import Cadastro from '/home/aluno/ppdm/Ppdm-2023-Tiago/src/screens/Cadastro.js'
import Home from '/home/aluno/ppdm/Ppdm-2023-Tiago/src/screens/Home.js'
import { NavigationContainer } from "@react-navigation/native";

export default function navegacao() {
    var Stack = createStackNavigator()
    return(
      <NavigationContainer>
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
      </NavigationContainer>
        
    )
}