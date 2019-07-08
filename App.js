import React from 'react';
import { StyleSheet } from 'react-native';
import Header from './src/components/header';

export default function App() {
  return (
    <Header title={'Albums'} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
