import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function telainicial() {
  return (
    <View style={styles.container}>
      <Text>App funcionando</Text>
      <button title = "ir" Onpress>  Cadastro</button>
      <StatusBar style="auto" />
    </View>
  );
}


function teladecadastro() {
  return (
    <View style={styles.container}>
      <Text> App funcionando</Text>
      <button>Teste</button>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {

const Stack = createNativeStackNavigator();
   return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={telainicial} />
      <Stack.Screen name="Cadastro" component={teladecadastro} />
    </Stack.Navigator>
    </NavigationContainer>
   
   );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
