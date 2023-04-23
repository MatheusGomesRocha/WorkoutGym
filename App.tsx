import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Olá mundo</Text>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
