import { StyleSheet, Text, TouchableOpacity, View , StatusBar, ScrollView, Image} from 'react-native';
import { Feather, SimpleLineIcons, Zocial, Entypo, Octicons, AntDesign, MaterialIcons, Ionicons, Fontisto, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

export default function Profile({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar  translucent backgroundColor="transparent"/>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="close" size={22} style={styles.headerIcons}/>
            </TouchableOpacity>
            <View style={styles.endHeader}>
                <TouchableOpacity>
                    <Octicons name="question" size={22} style={styles.headerIcons} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Fontisto name="bell" size={22} style={styles.headerIcons} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.infos}>
          <TouchableOpacity activeOpacity={0.9}>
            <Image style={styles.profile} source={require('../../../assets/perfil25.png')}/>
          </TouchableOpacity>
          <View style={styles.textInfos}>
            <Text style={styles.profileName}>Avix</Text>
            <Text>Agência 0001 - Conta 54163512-4</Text>
            <Text>Banco 0260 - Nu Pagamentos S.A. -</Text>
            <Text>Instituição de Pagamento</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.nuCoinContainer}activeOpacity={0.7}>
          <View style={styles.startNuCoin}>
            <Zocial name='bitcoin' size={20}/>
            <Text>Nucoin</Text>
          </View>
          <Text style={styles.nuCoinNew}>Novo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options} activeOpacity={0.7}>
          <View style={styles.startOptions}>
              <Entypo name='heart-outlined' size={24}/>
              <Text style={styles.titleOptions}>Seguro de Vida</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options} activeOpacity={0.7}>
          <View style={styles.startOptions}>
              <FontAwesome5 name='house-user' size={20}/>
              <Text style={styles.titleOptions}>Modo Rua</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options} activeOpacity={0.7}>
          <View style={styles.startOptions}>
              <Octicons name='gear' size={20}/>
              <View style={styles.borderOptions}>
                <Text style={styles.titleOptions}>Configurar</Text>
                <Text>Cartão, Conta, Pix, Perfil</Text>
              </View>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options} activeOpacity={0.7}>
          <View style={styles.startOptions}>
              <Feather name='shield' size={20}/>
              <View>
                <Text style={styles.titleOptions}>Segurança</Text>
              </View>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options} activeOpacity={0.7}>
          <View style={styles.startOptions}>
              <MaterialCommunityIcons name='home-circle-outline' size={20}/>
              <View>
                <Text style={styles.titleOptions}>Open Finance</Text>
              </View>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options} activeOpacity={0.7}>
            <View style={styles.startOptions}>
              <SimpleLineIcons name='note' size={20}/>
              <View>
                <Text style={styles.titleOptions}>Documentos</Text>
              </View>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options} activeOpacity={0.7}>
            <View style={styles.startOptions}>
              <Entypo name='shop' size={20}/>
              <View>
                <Text style={styles.titleOptions}>Pedir conta PJ</Text>
              </View>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color={'#404040'}/>
        </TouchableOpacity>
        <View style={styles.closeApp}>
          <TouchableOpacity style={styles.closeButton} activeOpacity={0.8}>
            <Ionicons name='return-down-back' size={26}/>
            <Text>Sair do aplicativo</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: '#E4E4E4',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 24,
    paddingEnd: 30,
  },

  endHeader: {
    flexDirection: 'row',
    gap: 28
  },

  infos: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 24,
    paddingEnd: 30,
    paddingTop: 30
  },

  textInfos: {
    marginStart: 20
  },

  profile: {
    width: 45,
    height: 45,
    borderRadius: 30
},

profileName: {
  fontSize: 20,
  fontWeight: '500',
  marginBottom: 2
},

nuCoinContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#F4F4F4',
  padding: 14,
  marginStart: 24,
  marginEnd: 30,
  marginTop: 20,
  borderRadius: 12,
  marginBottom: 16
},

startNuCoin: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 20,
  marginStart: 6,
},

nuCoinNew: {
  backgroundColor: '#820AD1',
  color: '#FFFFFF',
  borderRadius: 4,
  paddingHorizontal: 4
},

options: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#FFFFFF',
  padding: 28,
  paddingStart: 28,
  borderBottomColor: '#E4E4E4',
  borderBottomWidth: 2.5
},

startOptions: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 20
},

titleOptions: {
  fontWeight: '600',
  fontSize: 15
},

closeApp: {
  backgroundColor: '#FFFFFF',
  paddingBottom: 100,
  alignItems: 'center',
},

closeButton: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F4F4F4',
  borderRadius: 20,
  padding: 10,
  width: 350,
  marginTop: 20,
  gap: 8
}

})