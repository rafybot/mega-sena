import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Card } from 'react-native-paper';
import React, { useState } from 'react';


export default Sorteador => {
  const [visResultado, setVisResultado] = React.useState(false);
  const [txtAcertos, setTxtAcertos] = React.useState('');

  let inputNumbers = [5];
  let acertos = 0;

  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [number3, setNumber3] = React.useState('');
  const [number4, setNumber4] = React.useState('');
  const [number5, setNumber5] = React.useState('');
  const [number6, setNumber6] = React.useState('');

  
  const [random1, setRandom1] = React.useState('');
  const [random2, setRandom2] = React.useState('');
  const [random3, setRandom3] = React.useState('');
  const [random4, setRandom4] = React.useState('');
  const [random5, setRandom5] = React.useState('');
  const [random6, setRandom6] = React.useState('');

    const onChanged = (text, position) => {
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
        }
        switch(position) {
          case 1:
            setNumber1(newText);
            break;
          case 2:
            setNumber2(newText);
            break;
          case 3:
            setNumber3(newText);
            break;
          case 4:
            setNumber4(newText);
            break;
          case 5:
            setNumber5(newText);
            break;
          case 6:
            setNumber6(newText);
            break;
        }
    }

    const gerarResultado = () => {
        inputNumbers[0] = Number.parseInt(number1)
        inputNumbers[1] = Number.parseInt(number2)
        inputNumbers[2] = Number.parseInt(number3)
        inputNumbers[3] = Number.parseInt(number4)
        inputNumbers[4] = Number.parseInt(number5)
        inputNumbers[5] = Number.parseInt(number6)
        numerosValidos = true

        for(var i = 0; i < 6; i++) {
          if(inputNumbers[i] < 1 || inputNumbers[i] > 60 || !inputNumbers[i]) {
            numerosValidos = false
            break;
          }
        }
        if(!numerosValidos) {
          alert('Um dos números que você inseriu não está entre 1 e 60. Por favor, revise os números e clique no botão novamente.')
        } else {
          setRandom1(randomIntFromInterval(1,60)+ '');
          setRandom2(randomIntFromInterval(1,60)+ '');
          setRandom3(randomIntFromInterval(1,60)+ '');
          setRandom4(randomIntFromInterval(1,60)+ '');
          setRandom5(randomIntFromInterval(1,60)+ '');
          setRandom6(randomIntFromInterval(1,60)+ '');

          if(random1 == number1) acertos++;
          if(random2 == number2) acertos++;
          if(random3 == number3) acertos++;
          if(random4 == number4) acertos++;
          if(random5 == number5) acertos++;
          if(random6 == number6) acertos++;

          if(acertos == 6) {
            setTxtAcertos('Você acertou 6 números e fez uma Sena! Parabéns!!! 🎉')
          } else if (acertos == 5) {
            setTxtAcertos('Você acertou 5 números e fez uma Quina! Parabéns!!! 🎉')
          } else if (acertos == 4) {
            setTxtAcertos('Você acertou 4 números e fez uma Quadra! Parabéns!!! 🎉')
          } else {
            setTxtAcertos('Você acertou menos de quatro números e não levará o prêmio! Boa sorte na próxima vez!! 😢')
          }

          setVisResultado(true);
        }
    }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={styles.inputNumber} editable inputMode='numeric' 
            onChangeText={text1 => onChanged(text1, 1)}
            value={number1} placeholder='00'></TextInput>
          <TextInput style={styles.inputNumber} editable inputMode='numeric' 
            onChangeText={text2 => onChanged(text2, 2)}
            value={number2} placeholder='00'></TextInput>
          <TextInput style={styles.inputNumber} editable inputMode='numeric' 
            onChangeText={text3 => onChanged(text3, 3)}
            value={number3} placeholder='00'></TextInput>
          <TextInput style={styles.inputNumber} editable inputMode='numeric' 
            onChangeText={text4 => onChanged(text4, 4)}
            value={number4} placeholder='00'></TextInput>
          <TextInput style={styles.inputNumber} editable inputMode='numeric' 
            onChangeText={text5 => onChanged(text5, 5)}
            value={number5} placeholder='00'></TextInput>
          <TextInput style={styles.inputNumber} editable inputMode='numeric' 
            onChangeText={text6 => onChanged(text6, 6)}
            value={number6} placeholder='00'></TextInput>
        </View>
       
      </Card>
      <Button
        onPress={gerarResultado}
        title="MOSTRAR RESULTADO"
        color="#1E6813"
      />
      {
          visResultado &&
          <Card style={styles.cardResult}>
            <Text>
                Os números sorteados foram:
            </Text>
            <Text style={styles.textResult}>
              {random1} - {random2} - {random3} - {random4} - {random5} - {random6}
            </Text>
            <Text>
              {txtAcertos}
            </Text>
          </Card>
      }
    </View>
  );
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    marginBottom: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    borderRadius: 30,
    backgroundColor: 'none',
    borderWidth: 3,
    borderColor: '#1C5C13'
  },
  inputNumber: {
    display: 'flex',
    width: 40, height: 40,
    marginHorizontal: 4,
    padding: 4,
    textAlign: 'center',
    borderRadius: '50%',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    borderWidth: 2,
    borderColor: "#1C5C13"
  },
  cardResult: {
    marginTop: 30,
    paddingVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    textAlign: 'center'
  },
  textResult: {
    color: '#1C5C13',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
