import { StyleSheet, Text, TouchableOpacity, View , StatusBar, ScrollView} from 'react-native';
import { AntDesign, Feather, Octicons, MaterialIcons, Ionicons, Fontisto, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

export default function SavedMoney({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar  translucent backgroundColor="transparent"/>
        <View style={styles.start}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <AntDesign name="close" size={20} style={styles.headerIcons}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Octicons name="question" size={20} style={styles.headerIcons} />
                </TouchableOpacity>
            </View>
        <View style={styles.mainContainer}>
            <View style={styles.titleBalance}>
                <Text>Total guardado</Text>
                <Text>R$ 200.418,12</Text>
            </View>
            <View style={styles.enjoy}>
                <Text>Aproveite os novos rendimentos</Text>
                <Text>
                    Agora o RDB Planejado do Nu tem
                    rendimentos maiores que 100% do CDI para
                    diferentes prazos de vencimento. Clique em
                    guardar e confira as opções.
                </Text>
            </View>
            <View style={styles.availableContainer}>
                <FontAwesome name='money' size={20}/>
                <View style={styles.availableMain}>
                    <Text style={styles.available}>Disponível</Text>
                    <Text style={styles.available2}>a qualquer momento</Text>
                </View>
                <Text style={styles.valueAvailable}>R$ 197,58</Text>
                <MaterialIcons name='arrow-forward-ios' size={16}/>
            </View>
            <View style={styles.borderTop}/>
        </View>
        </View>
        <View style={styles.end}>
            <View style={styles.borderBottom}/>
            <Text style={styles.buttonImage}>Guardar</Text>
        </View>
    </ScrollView>
  );
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 16 : 64;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: statusBarHeight
  },

  start: {
    
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 28,
    paddingEnd: 30,
  },

  headerIcons: {
    color: '#404040',
  },

  titleBalance: {
    paddingStart: 28,
    paddingTop: 12
  },

  enjoy:{
    marginStart: 28,
    marginEnd: 28,
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#E4E4E4',
  },

  availableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    alignItems: 'center',
    paddingStart: 28,
    paddingEnd: 28,
    paddingTop: 28
  },

  availableMain: {
    marginStart: -20,
    marginEnd: 40
  },

  available: {
    maxWidth: 100,
    fontWeight: '600'
  },

  available2: {
    fontWeight: '600'
  },

  valueAvailable: {
    
  },

  borderTop:{
    marginTop: 24,
    backgroundColor: '#E4E4E4',
    height: 1
  },

  borderBottom:{
    backgroundColor: '#E4E4E4',
    height: 1
  },

  buttonImage:{
    backgroundColor: '#820AD1',
    borderRadius: 24,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    padding: 8,
    marginLeft: 28,
    marginEnd: 28,
    marginTop: 20
}
});