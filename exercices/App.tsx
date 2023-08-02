import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import ListaProdutosV2 from './components/produtos/ListaProdutosV2';

export default () => (
  <SafeAreaView style={style.App}>
    <ListaProdutosV2 />
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
