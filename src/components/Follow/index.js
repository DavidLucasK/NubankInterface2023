import React from 'react'
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native'

import { Feather, Octicons, Zocial } from '@expo/vector-icons'

export default function Follow() {

    return (
        <View style={styles.container}>
            <View style={styles.borderTop}></View>
            <Text style={styles.text}>Acompanhe também</Text>
            <TouchableOpacity style={styles.buttonContainer} act>
                <View style={styles.startAssistant}>
                    <Zocial name='bitcoin' size={20}/>
                    <Text style={styles.textAssistant}>Assistente de pagamentos</Text>
                </View>
                <Text style={styles.assistantNew}>Novo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 12,
        marginBottom: 24
    },

    borderTop: {
        paddingTop: 2,
        backgroundColor: '#E4E4E4',
        height: 2.5
    },

    text: {
        fontWeight: '600',
        fontSize: 20,
        paddingStart: 24,
        marginEnd: 24,
    },

    textButton: {
        fontWeight: '500',
        color: '#303030',
        paddingStart: 24,
        marginEnd: 24,
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#E4E4E4',
        borderRadius: 12,
        padding: 12,
        marginStart: 20,
        marginEnd: 20,
    },

    startAssistant: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 6,
        gap: 18,
    },
    
    textAssistant: {
        width: 100,
        fontWeight: '500',
    },

    assistantNew: {
        backgroundColor: '#820AD1',
        color: '#FFFFFF',
        borderRadius: 4,
        paddingHorizontal: 4
    },
})