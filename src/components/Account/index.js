import React from 'react'
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native'

import { Feather, Octicons, MaterialIcons } from '@expo/vector-icons'

export default function Account({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.upSide}>
                <Text style={styles.text}>Conta</Text>
                <MaterialIcons name="arrow-forward-ios" style={styles.icon}/>
            </View>
            <Text style={styles.valorAccount}>R$ 28.725,68</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingTop: 24,
        paddingBottom: 24,
        paddingStart: 8
    },

    upSide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 22
    },

    text: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500',
    },

    icon: {
        color: "#2f2f2f",
        fontSize: 16,
        paddingEnd: 22
    },

    valorAccount: {
        fontSize: 18,
        fontWeight: '500',
        paddingStart: 22
    }
})