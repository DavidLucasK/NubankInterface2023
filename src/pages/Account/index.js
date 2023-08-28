import { StyleSheet, Text, TouchableOpacity, View , StatusBar, ScrollView} from 'react-native';
import { Feather, Octicons, MaterialIcons, Ionicons, Fontisto, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

export default function Account({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar  translucent backgroundColor="transparent"/>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <MaterialIcons name="arrow-back-ios" size={20} style={styles.headerIcons}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Octicons name="question" size={20} style={styles.headerIcons} />
            </TouchableOpacity>
        </View>
        <View style={styles.balance}>
            <Text style={styles.titleBalance}>Saldo disponível</Text>
            <Text style={styles.valueBalance}>R$ 86.412,14</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.firstOptions} activeOpacity={0.7}>
                <View style={styles.startOptions}>
                    <Ionicons name='arrow-up' size={20} style={styles.arrowUp}/>
                    <Ionicons name='arrow-down' size={20} style={styles.arrowDown}/>
                    <Text style={styles.titleOptions}>Movimentações do mês</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={16} style={styles.optionsEndIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SavedMoney')} style={styles.firstOptions} activeOpacity={0.7}>
                <View style={styles.startOptions}>
                    <MaterialCommunityIcons name='piggy-bank-outline' size={28} style={styles.optionsStarterIcon}/>
                    <View>
                        <Text style={styles.titleOptions}>Dinheiro guardado</Text>
                        <Text style={styles.titleOptions}>R$ 200.418,12</Text>
                    </View>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={16} style={styles.optionsEndIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.firstOptions} activeOpacity={0.7}>
                <View style={styles.startOptions}>
                    <MaterialIcons name='signal-cellular-alt' size={24} style={styles.optionsStarterIcon}/>
                    <View>
                        <Text style={styles.titleOptions}>Rendimento total da conta</Text>
                        <View style={styles.rendimentoText}>
                            <Text style={styles.valueGreen}>+R$ 15,24</Text>
                            <Text style={styles.valueText}>este mês</Text>
                        </View>
                    </View>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={16} style={styles.optionsEndIcon}/>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.iconsContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <FontAwesome name='money' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Depositar</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialCommunityIcons name='barcode' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Pagar</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <FontAwesome5 name='money-bill' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Transferir</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialCommunityIcons name='hand-coin-outline' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Empréstimos</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialIcons name='network-cell' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Investir</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <Feather name='file-text' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Pedir Extrato</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <MaterialCommunityIcons name='message-reply-outline' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Cobrar</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
                        <FontAwesome5 name='money-bill' size={24}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Seu salário</Text>
                </View>
        </ScrollView>
        <View style={styles.borderAssistant}>
          <TouchableOpacity style={styles.assistant} activeOpacity={0.8}>
            <View style={styles.startAssistant}>
              <FontAwesome5 name='dollar-sign' size={16}/>
              <Text style={styles.textAssistant}>Assistente de pagamentos</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={14} style={styles.endAssistant}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.history}>Histórico</Text>
        <TouchableOpacity style={styles.searchBar} activeOpacity={0.8}>
          <Fontisto name='search' size={18} color={'#404040'}/>
          <Text style={styles.textSearch}>Buscar</Text>
        </TouchableOpacity>
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
    paddingStart: 28,
    paddingEnd: 30,
  },

  headerIcons: {
    color: '#404040',
  },

  balance: {
    marginTop: 40,
    marginBottom: 30,
    paddingStart: 28,
    paddingEnd: 30,
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
    paddingStart: 28,
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

  valueGreen: {
    color: 'green',
    fontWeight: '500',
    fontSize: 16
  }, 

  valueText: {
    fontSize: 16
  },

  iconsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    maxHeight: 160,
    paddingStart: 24
},

mainContainer: {
  marginRight: 16,
  gap: 10,
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

borderAssistant: {
  borderTopColor: '#E4E4E4',
  borderTopWidth: 2,
  marginStart: -32,
  marginEnd: -32,
  marginTop: 40,
  paddingStart: 28,
  paddingEnd: 30,
},

assistant: {
  paddingStart: 28,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#E4E4E4',
  borderRadius: 20,
  height: 60,
  marginStart: 28,
  marginEnd: 32,
  marginTop: 32,
},

startAssistant: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 16
},

textAssistant: {
  fontSize: 16,
  fontWeight: '400'
},

endAssistant: {
 paddingEnd: 26
},

history: {
  marginTop: 48,
  fontSize: 22,
  fontWeight: '600',
  paddingStart: 28,
  paddingEnd: 30,
},

searchBar: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 20,
  backgroundColor: '#E4E4E4',
  borderRadius: 24,
  padding: 10,
  marginTop: 28,
  paddingStart: 20,
  marginStart: 24,
  marginEnd: 30,
},

textSearch: {
  fontWeight: '600',
  fontSize: 16,
  color: '#424242'
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
  marginTop: 5,
  alignSelf: 'center',
  color: '#000',
  opacity: 0.6
},

titleTransactions: {
  fontWeight: '800'
},

});