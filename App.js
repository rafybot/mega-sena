import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Sorteador from './components/SorteadorNum';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        💲 MEGASENA DA RAFINHA 💲
      </Text>
      <Card style={styles.card}>
        <Text style={styles.titleCard}>
          Como jogar:
        </Text>
        <Text style={styles.paragraph}>
          Insira seis números da sua escolha, todos entre 1 e 60. Para exibir o resultado do sorteio, clique em "Mostrar resultado".
          <br/><b>Boa sorte! 😎</b>
        </Text>
      </Card>
      <Sorteador />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    padding: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2FDA0B'
  },
  titleCard: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    paddingBottom: 3,
    borderBottomWidth: 2,
    color: '#1C5C13',
    borderColor: '#1C5C13'
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'center'
  },
  card: {
    marginVertical: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#f5f5f5'
  },
});
