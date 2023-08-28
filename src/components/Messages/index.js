import React from 'react'
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'

import { Feather, Octicons, MaterialIcons, FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Messages() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.mainContainer} activeOpacity={0.8}>
                    <Text>Prêmios mensais com Nubank Vida a partir de R$4/mês</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainContainer} activeOpacity={0.8}>
                    <Text style={styles.firstText}>Facilite seus planos futuros</Text>
                    <Text style={styles.secondText}>guarde dinheiro nas Caixinhas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainContainer} activeOpacity={0.8}>
                    <Text style={styles.firstText}>Convide amigos para o Nubank</Text>
                    <Text style={styles.secondText}>e desbloqueie brasões incríveis.</Text>
                </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        maxHeight: 110,
        paddingStart: 24,
    },

    mainContainer: {
        backgroundColor: '#E4E4E4',
        justifyContent: 'center',
        borderRadius: 14,
        padding: 20,
        paddingStart: 24,
        paddingEnd: 40,
        maxWidth: 300,
        maxHeight: 80,
        marginRight: 16,
    },

    firstText: {
        color: '#820AD1'
    },

    secondText: {
    }
})