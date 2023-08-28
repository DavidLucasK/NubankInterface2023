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

export default function Loan() {
    return (
        <View style={styles.container}>
            <View style={styles.borderTop}></View>
            <View style={styles.upSide}>
                <Text style={styles.firstText}>Empréstimo</Text>
                <MaterialIcons name="arrow-forward-ios" style={styles.icon}/>
            </View>
            <Text style={styles.secondText}>Crie um aviso para saber quando um empréstimo
            ficar disponível para você.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingTop: 2,
        paddingBottom: 24,
    },

    borderTop: {
        paddingTop: 2,
        backgroundColor: '#E4E4E4',
        height: 2.5
    },

    upSide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 24,
        paddingBottom: 16,
        marginTop: 20
    },

    icon: {
        color: "#2f2f2f",
        fontSize: 16,
        paddingEnd: 22
    },

    firstText: {
        fontWeight: '600',
        fontSize: 20,
    },

    secondText: {
        fontWeight: '500',
        fontSize: 15,
        color: '#303030',
        paddingStart: 24,
        paddingEnd: 20,
        marginTop: -14
    },

    valorFatura: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
        paddingStart: 24,
    },
    
    limit: {
        fontWeight: '400',
        fontSize: 14,
        color: '#5f5f5f',
        paddingStart: 24,
    }
})