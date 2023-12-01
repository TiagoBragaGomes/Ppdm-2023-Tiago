import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native'; // Adicionei o Button
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function telainicial({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                //   source={require('/home/aluno/Documentos/Ppdm/Ppdm-2023-Tiago/assets/imagem.jpg')} // Substitua pelo caminho correto da sua imagem
                style={styles.logo}
            />
            <Text>App funcionando</Text>
            <Button
                title="Ir para Cadastro"
                onPress={() => navigation.navigate('Cadastro')}
            />
               <Button
                title="Entar"
                onPress={() => navigation.navigate('Cadastro')}
               
            />
            <StatusBar style="auto" />
        </View>
    );
}

function teladecadastro() {
    return (
        <View style={styles.container}>
            <Text>App funcionando</Text>
            <Button title="Teste" onPress={() => { }} />
            <StatusBar style="auto" />
        </View>
    );
}

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
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
        backgroundColor: '#ffff', // Alterada a cor para azul
    },
    // logo: {
    //   width: 1860, // Ajuste de acordo com o tamanho desejado
    //   height: 1500, // Ajuste de acordo com o tamanho desejado
    //   marginBottom: 200, // Espaçamento opcional abaixo da imagem
    // },
});


