import { StatusBar, StyleSheet, View } from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';

function App() {

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={ 'light-content' }
        backgroundColor={ 'black' }
      />
      <CalculatorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
