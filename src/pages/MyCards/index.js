import { StyleSheet, Text, TouchableOpacity, View , StatusBar, ScrollView} from 'react-native';
import { Feather, Octicons, AntDesign, MaterialIcons, Ionicons, Fontisto, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

export default function MyCards({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar  translucent backgroundColor="transparent"/>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="close" size={22} style={styles.headerIcons}/>
            </TouchableOpacity>
        </View>
        <Text style={styles.titleMyCards}>Meus cartões</Text>
        <Text style={styles.titleFisicCard}>Cartão físico</Text>
        <View style={styles.firstFisicCard}>
          <Feather style={styles.iconCard} name='credit-card' size={20}/>
          <View style={styles.textNames}>
            <Text>AVIX L F ZERA</Text>
            <Text color={'#404040'}>.... 4624</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </View>
        <TouchableOpacity style={styles.addCard} activeOpacity={0.8}>
          <AntDesign name='plus'size={20} color={'#820AD1'}/>
          <Text style={styles.titleAddCard}>Pedir cartão adicional</Text>
          <Text style={styles.newAddCard}>NOVO</Text>
        </TouchableOpacity>
        <Text style={styles.titleVirtualCard}>Cartões Virtuais</Text>
        <TouchableOpacity style={styles.virtualCards} activeOpacity={0.7}>
          <Feather style={styles.iconCard} name='credit-card' size={20}/>
          <View style={styles.textVirtualNames}>
            <Text>Ifood</Text>
            <Text color={'#404040'}>.... 8941</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.virtualCards} activeOpacity={0.7}>
          <Feather style={styles.iconCard} name='credit-card' size={20}/>
          <View style={styles.textVirtualNames}>
            <Text>ayu</Text>
            <Text color={'#404040'}>.... 7452</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.virtualCards} activeOpacity={0.7}>
          <Feather style={styles.iconCard} name='credit-card' size={20}/>
          <View style={styles.textVirtualNames}>
            <Text>Amazon</Text>
            <Text color={'#404040'}>.... 3584</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.virtualCards} activeOpacity={0.7}>
          <Feather style={styles.iconCard} name='credit-card' size={20}/>
          <View style={styles.textVirtualNames}>
            <Text>Avix</Text>
            <Text color={'#404040'}>.... 1240</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <View style={styles.border}></View>
        <View style={styles.createCard}>
          <AntDesign name='plus'size={20} color={'#820AD1'}/>
          <Text style={styles.titleCreateCard}>Criar cartão virtual</Text>
        </View>
    </ScrollView>
  );
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: statusBarHeight,
    paddingStart: 24,
    paddingEnd: 30,
    paddingTop: statusBarHeight
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  titleMyCards: {
    fontSize: 32,
    fontWeight: '600',
    paddingTop: 16
  },

  titleFisicCard: {
    fontSize: 16,
    fontWeight: '600',
    color: '#404040',
    paddingTop: 32
  },

  firstFisicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24
  },
  
  iconCard: {
    transform: [{rotate: '90deg'}]
  },

  textNames: {
    marginStart: -180
  },

  addCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingTop: 24,
    borderTopColor: '#E4E4E4',
    borderTopWidth: 2
  },

  titleAddCard: {
    marginStart: -90,
    color: '#820AD1',
    fontWeight: '600',
    fontSize: 16
  },

  newAddCard: {
    backgroundColor: '#820AD1',
    borderRadius: 4,
    paddingHorizontal: 6,
    color: '#FFFFFF'
  },

  titleVirtualCard: {
    fontSize: 16,
    fontWeight: '500',
    color: '#404040',
    paddingTop: 32
  },

  virtualCards: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 16
  },

  textVirtualNames: {
    marginStart: -220
  },

  createCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 32,
    borderTopColor: '#E4E4E4',
    borderTopWidth: 2,
    gap: 16,
  },

  titleCreateCard: {
    color: '#820AD1',
    fontWeight: '600',
    fontSize: 16
  },
})