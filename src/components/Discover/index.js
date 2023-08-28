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

import { Feather, Octicons, MaterialIcons } from '@expo/vector-icons'

export default function Discover() {
    return (
        <View style={styles.container}>
            <View style={styles.borderTop}></View>
            <View style={styles.upSide}>
                <Text style={styles.firstText}>Descubra mais</Text>
            </View>
            <ScrollView horizontal={true} style={styles.mainContainer} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={0.9} style={styles.imageContainer}>
                    <Image style={styles.firstImage} source={require('../../../assets/icon.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleImage}>Nubank Celular Seguro</Text>
                        <Text>100% cobertura, 0% estresse.</Text>
                        <Text>Simule agora mesmo.</Text>
                        <Text style={styles.buttonImage}>Conhecer</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.imageContainer}>
                    <Image style={styles.firstImage} source={require('../../../assets/icon.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleImage}>Nubank Auto</Text>
                        <Text>Aproveite seu carro com toda</Text>
                        <Text>tranquilidade.</Text>
                        <Text style={styles.buttonImage}>Simule agora</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.imageContainer}>
                    <Image style={styles.firstImage} source={require('../../../assets/icon.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleImage}>Indique o Nu para amigos</Text>
                        <Text>Espalhe como é simples estar</Text>
                        <Text>no controle.</Text>
                        <Text style={styles.buttonImage}>Indicar amigos</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
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

    mainContainer:{
        flexDirection: 'row',
        paddingStart: 24,
        borderRadius: 20,
        
    },

    imageContainer: {
        marginEnd: 20
    },

    firstImage: {
        width: 250,
        height: 120,
        maxWidth: 274,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    },

    textContainer: {
        backgroundColor: '#E4E4E4',
        padding: 16,
        paddingBottom: 20,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16
    },

    titleImage: {
        fontWeight: '600',
        marginBottom: 6
    },

    buttonImage:{
        backgroundColor: '#820AD1',
        borderRadius: 24,
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        padding: 6,
        maxWidth: 150,
        marginTop: 12
    }
})