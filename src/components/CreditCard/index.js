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

import { useNavigation } from '@react-navigation/native';

export default function CreditCard() {

    const navigation = useNavigation();

    function openCreditCardPage() {
        navigation.navigate('CreditCardPage');
    }

    return (
        <TouchableOpacity style={styles.container} onPress={openCreditCardPage} activeOpacity={0.7}>
            <View style={styles.borderTop}></View>
            <View style={styles.upSide}>
                <Text style={styles.text}>Cartão de crédito</Text>
                <MaterialIcons name="arrow-forward-ios" style={styles.icon}/>
            </View>
            <Text style={styles.fatura}>Fatura atual</Text>
            <Text style={styles.valorFatura}>R$ 454.68</Text>
            <Text style={styles.limit}>Limite disponível de R$ 120,49</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingTop: 24,
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

    text: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
    },

    fatura: {
        fontWeight: '400',
        fontSize: 16,
        paddingStart: 24,
    },

    valorFatura: {
        fontSize: 18,
        fontWeight: '600',
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