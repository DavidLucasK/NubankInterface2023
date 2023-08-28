import React from 'react'
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import { Feather, Octicons } from '@expo/vector-icons'

export default function Header() {

    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
            <StatusBar  translucent backgroundColor="transparent"/>
            <View style={styles.upContent}>
                <TouchableOpacity activeOpacity={0.9} onPress={openScreen}>
                    <Image style={styles.profile} source={require('../../../assets/perfil25.png')}/>
                </TouchableOpacity>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.buttonUser} activeOpacity={0.8}>
                        <Feather name="eye" size={25} color="#FFFFFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUser} activeOpacity={0.8}>
                        <Octicons name="question" size={25} color="#FFFFFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUser} activeOpacity={0.8}>
                        <Feather name="user" size={25} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight - 24 : 64;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#820AD1',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        marginTop: -28,
        paddingStart: 24,
        paddingEnd: 24,
        paddingBottom: 20,
    },
    upContent: {
        display: 'flex',
        flex: 1,
        paddingTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profile: {
        width: 45,
        height: 45,
        borderRadius: 30
    },
    headerIcons: {
        flexDirection: 'row',
        gap: 28
    }
})