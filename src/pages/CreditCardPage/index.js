import { StyleSheet, Text, TouchableOpacity, View , StatusBar, ScrollView} from 'react-native';
import { AntDesign, Feather, Octicons, MaterialIcons, Ionicons, Fontisto, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

export default function CreditCardPage({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar  translucent backgroundColor="transparent"/>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <MaterialIcons name="arrow-back-ios" size={20} style={styles.headerIcons}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcons}>
                <Fontisto name='search' size={18} color={'#404040'}/>
                <Octicons name="question" size={20} style={styles.headerIcons1} />
            </TouchableOpacity>
        </View>
        <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.block}>
                <Text style={styles.titleBalance}>Bloqueio preventivo</Text>
                <Text style={styles.textBlock}>
                    Seu cartão foi bloqueado temporariamente por segurança.
                    Por favor, entre em contato conosco.
                </Text>
                <Text style={styles.buttonImage}>Saiba mais</Text>
            </View>
            <View style={styles.balance}>
                <Text style={styles.titleBalance}>Fatura atual</Text>
                <Text style={styles.valueBalance}>R$ 454,68</Text>
                <Text style={styles.valueLimit}>Limite disponível R$ 454,68</Text>
                <Text style={styles.valueCloses}>Fecha em 24 SET</Text>
            </View>
        </ScrollView>
        <ScrollView style={styles.iconsContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialCommunityIcons name='barcode' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Pagar fatura</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <Feather name='menu' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Resumo de faturas</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <Feather name='dollar-sign' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Passar tudo no crédito</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <AntDesign name='swap' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Meus limites</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialIcons name='credit-card' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Meus cartões</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <Feather name='user-plus' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Indicar amigos</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialCommunityIcons name='barcode' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Pagar boleto</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialIcons name='attach-money' size={24}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Débito automático</Text>
                </View>
        </ScrollView>
        <Text style={styles.dayTitle}>Sábado</Text>
        <View style={styles.transactions}>
          <View style={styles.startTransactions}>
            <View style={styles.iconsTransactionsSend}>
              <Ionicons name='fast-food' size={20} style={styles.iconTransactions}/>
            </View>
            <View>
              <Text style={styles.titleTransactions}>Ifood*Ifd*McDon</Text>
              <Text style={styles.valueTransactions}>21:36</Text>
            </View>
          </View>
          <Text style={styles.price}>R$ 79,10</Text>
        </View>
        <View style={styles.borderTransactions}/>
        <Text style={styles.dayTitle}>Sexta</Text>
        <View style={styles.transactions}>
          <View style={styles.startTransactions}>
            <View style={styles.iconsTransactionsSend}>
              <MaterialIcons name='directions-car' size={20} style={styles.iconTransactions}/>
            </View>
            <View>
              <Text style={styles.titleTransactions}>Ifood*Ifd*McDon</Text>
              <Text style={styles.valueTransactions}>21:36</Text>
            </View>
          </View>
          <Text style={styles.price}>R$ 19,84</Text>
        </View>
        <View style={styles.transactions}>
          <View style={styles.startTransactions}>
            <View style={styles.iconsTransactionsSend}>
              <FontAwesome name='money' size={22} style={styles.iconTransactionsSend}/>
            </View>
            <View>
              <Text style={styles.titleTransactions}>Transferência enviada</Text>
              <Text style={styles.valueTransactions}>Valorant BR</Text>
              <Text style={styles.valueTransactions}>R$ 300,00</Text>
              <Text style={styles.valueTransactions}>Pix</Text>
            </View>
          </View>
          <Text>Hoje</Text>
        </View>
        <View style={styles.borderTransactions}/>
        <View style={styles.transactions}>
          <View style={styles.startTransactions}>
            <View style={styles.iconsTransactions}>
              <MaterialCommunityIcons name='piggy-bank-outline' size={32} style={styles.iconTransactions}/>
            </View>
            <View>
              <Text style={styles.titleTransactions}>Dinheiro resgatado</Text>
              <Text style={styles.valueTransactions}>R$ 20,00</Text>
            </View>
          </View>
          <Text>Ontem</Text>
        </View>
        <View style={styles.borderTransactions}/>
        <View style={styles.transactions}>
          <View style={styles.startTransactions}>
            <View style={styles.iconsTransactionsSend}>
              <MaterialCommunityIcons name='piggy-bank-outline' size={32} style={styles.iconTransactions}/>
            </View>
            <View>
              <Text style={styles.titleTransactions}>Dinheiro guardado</Text>
              <Text style={styles.valueTransactions}>R$ 300,00</Text>
            </View>
          </View>
          <Text>Hoje</Text>
        </View>
        <View style={styles.borderTransactions}/>
        <View style={styles.transactions}>
          <View style={styles.startTransactions}>
            <View style={styles.iconsTransactions}>
              <MaterialCommunityIcons name='piggy-bank-outline' size={32} style={styles.iconTransactions}/>
            </View>
            <View>
              <Text style={styles.titleTransactions}>Dinheiro resgatado</Text>
              <Text style={styles.valueTransactions}>R$ 300,00</Text>
            </View>
          </View>
          <Text>Hoje</Text>
        </View>
        <View style={styles.borderTransactions}/>
        <View style={styles.transactions}>
          <View style={styles.startTransactions}>
            <View style={styles.iconsTransactions}>
              <MaterialCommunityIcons name='piggy-bank-outline' size={32} style={styles.iconTransactions}/>
            </View>
            <View>
              <Text style={styles.titleTransactions}>Transferência enviada</Text>
              <Text style={styles.valueTransactions}>R$ 300,00</Text>
            </View>
          </View>
          <Text>Hoje</Text>
        </View>
        <View style={styles.borderTransactions}/>
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

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 32,
    paddingEnd: 30,
  },

  headerIcons: {
    flexDirection:'row',
    gap: 24
  },

  headerIcons1: {
    color: '#404040',
  },

  block: {
    marginTop: 80,
    marginBottom: 120,
    paddingStart: 24,
    width: 400
  },

  textBlock: {
    fontSize: 18,
    maxWidth: 350,
    marginTop: 24,
    color: '#646464',
    fontWeight: '300'
  },

  buttonImage:{
    backgroundColor: '#820AD1',
    borderRadius: 24,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
    paddingVertical: 12,
    maxWidth: 130,
    marginTop: 24
},

  balance: {
    marginTop: 120,
    marginBottom: 120,
    paddingStart: 24,
    paddingEnd: 30,
    width: 400
  },

  titleBalance: {
    color: '#404040',
    fontWeight: '500',
    fontSize: 18,
  },

  valueBalance: {
    color: '#000',
    fontWeight: '500',
    fontSize: 38,
  },

  firstOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingStart: 24,
    paddingEnd: 30,
  },

  startOptions: {
    flexDirection: 'row',
  },

  optionsStarterIcon: {
    marginTop: 6,
    marginRight: 16,
  },

  arrowDown: {
    marginTop: 4,
    marginLeft: -10,
    marginRight: 16
  },

  arrowUp: {
    marginTop: -4
  },

  titleOptions: {
    fontSize: 16
  },

  rendimentoText: {
    flexDirection: 'row',
    gap: 4
  },

  valueText: {
    fontSize: 16
  },

  iconsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    maxHeight: 160,
    paddingStart: 24,
    paddingEnd: 30
},

mainContainer: {
    marginRight: 16,
    gap: 2,
},

text: {
    fontWeight: '600',
    fontSize: 14,
    maxWidth: 85,
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
},

history: {
  marginTop: 48,
  fontSize: 22,
  fontWeight: '600',
  paddingStart: 24,
  paddingEnd: 30,
},

transactions: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 32,
  paddingStart: 24,
  paddingEnd: 30,
},

borderTransactions: {
  position: 'relative',
  backgroundColor: '#E4E4E4',
  height: 2,
  marginTop: 20
},

dayTitle: {
    paddingStart: 24,
    fontWeight: '500',
    fontSize: 16,
    color: '#747474',
    marginBottom: -16,
    marginTop: 16
},

startTransactions: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 16
},

iconsTransactions: {
  backgroundColor: '#79FFA1',
  borderRadius: 20,
  width: 45,
  height: 45
},

iconsTransactionsSend: {
  backgroundColor: '#E4E4E4',
  borderRadius: 20,
  width: 45,
  height: 45
},

iconTransactionsSend: {
  marginTop: 12,
  alignSelf: 'center',
  color: '#000',
  opacity: 0.8
},

iconTransactions: {
  marginTop: 10,
  alignSelf: 'center',
  color: '#000',
  opacity: 0.6
},

titleTransactions: {
  fontWeight: '800'
},

price: {
    fontWeight: '800',
    fontSize: 16
}

});