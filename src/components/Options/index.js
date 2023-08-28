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

export default function Options() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <Octicons name='diamond' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Área Pix</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialCommunityIcons name='barcode' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Pagar</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <FontAwesome5 name='money-bill-wave' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Transferir</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <Feather name='smartphone' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Recarga de celular</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <FontAwesome5 name='donate' size={24} color='#000'/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Caixinhas</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialCommunityIcons name='message-reply-outline' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Cobrar</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialIcons name='signal-cellular-alt' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Investir</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <FontAwesome name='money' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Depositar</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <Octicons name='globe' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Transferir Internac.</Text>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingStart: 24,
        maxHeight: 140,
        marginBottom: 20
    },

    mainContainer: {
        marginRight: 8,
        gap: 2
    },

    text: {
        fontWeight: '500',
        fontSize: 14,
        maxWidth: 75,
        maxHeight: 50,
        textAlign: 'center'
    },

    iconContainer: {
        backgroundColor: '#E4E4E4',
        width: 76,
        height: 76,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})