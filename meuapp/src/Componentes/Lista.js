import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function Lista() {
    const lista = [

        {
            id: 1,
            nome: 'Catupiry',
            idade: 10,

        },
        {
            id: 2,
            nome: 'Branch',
            idade: 65,
        },
        {
            id: 3,
            nome: 'Gina',
            idade: 19,
        },
    ];
    return (
        <>

        <View>
            <Text>Teste</Text>
        </View>
        
        </>
    )
}
