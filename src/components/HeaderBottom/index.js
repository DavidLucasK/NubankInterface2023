import React from 'react'
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native'

export default function HeaderBottom() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, Avix</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#820AD1',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        paddingStart: 28,
        paddingBottom: 20
    }
})