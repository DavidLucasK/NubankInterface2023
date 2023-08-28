import React from 'react'
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native'

import { Feather, Octicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';

export default function Cards() {

    const navigation = useNavigation();

    function openMyCards() {
        navigation.navigate('MyCards');
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={openMyCards}>
            <Feather style={styles.icon} name='credit-card' size={20} />
            <Text style={styles.text}>Meus cartões</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        borderRadius: 12,
        height: 50,
        marginStart: 24,
        paddingStart: 24,
        marginEnd: 24,
        marginBottom: 24,
        backgroundColor: '#E4E4E4',
        
    },

    icon: {
        transform: [{rotate: '90deg'}]
    },

    text: {
        fontWeight: '500'
    }
})