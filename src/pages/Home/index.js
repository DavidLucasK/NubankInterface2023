import { StyleSheet, Text, TouchableOpacity, View, ScrollView, RefreshControl } from 'react-native';
import React from 'react';
import Header from './../../components/Header/index';
import HeaderBottom from './../../components/HeaderBottom/index';
import Account from './../../components/Account/index';
import Options from './../../components/Options/index';
import Cards from './../../components/Cards/index';
import Messages from './../../components/Messages/index';
import CreditCard from './../../components/CreditCard/index';
import Follow from './../../components/Follow/index';
import Loan from './../../components/Loan/index';
import Discover from './../../components/Discover/index'

export default function Home({ navigation }) {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 600);
  }, []);
  
  return (
    <ScrollView 
      style={styles.container} 
      showsVerticalScrollIndicator={false} 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <Header/>
      <HeaderBottom/>
      <TouchableOpacity onPress={() => navigation.navigate('Account')} activeOpacity={0.6}>
        <Account/>
      </TouchableOpacity>
      <Options/>
      <Cards/>
      <Messages/>
      <CreditCard/>
      <Follow/>
      <Loan/>
      <Discover/>
        <Text style={[styles.a, {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0

        }]}>Alasdiuagsdo</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  a: {
    alignSelf: 'center',
    backgroundColor: '#FFF'
  }
});