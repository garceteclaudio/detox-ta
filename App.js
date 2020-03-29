import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  Button,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import styles from './styles';

class Home extends Component {
  state = {
    buttonEnabled: false,
  };

  render() {
    const buttonColor = this.state.buttonEnabled ? 'red' : 'blue';

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Ingresar datos:</Text>
        <Text style={styles.textForInput}>Nombre:</Text>
        <TextInput style={styles.input} testID="name" />
        <Text style={styles.textForInput}>Apellido:</Text>
        <TextInput style={styles.input} testID="lastName" />

        <TouchableHighlight
          style={[styles.buttons, {backgroundColor: buttonColor}]}
          onPress={() =>
            this.setState({buttonEnabled: !this.state.buttonEnabled})
          }
          testID="button1">
          <Text style={styles.textForInput}>Crear cuenta</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.buttons, {backgroundColor: buttonColor}]}
          onPress={() =>
            this.setState({buttonEnabled: !this.state.buttonEnabled})
          }
          testID="button2">
          <Text style={styles.textForInput}>Crear cuenta</Text>
        </TouchableHighlight>

        <Text style={styles.textForInput}> NULL</Text>

        <ScrollView>
          <View style={styless.containerr}>
            <Text style={styless.item}>Carlos</Text>
            <Text style={styless.item}>Gus</Text>
            <Text style={styless.item}>Karina</Text>
            <Text style={styless.item}>Lexi</Text>
            <Text style={styless.item}>Karen</Text>
            <Text style={styless.item}>Ari</Text>
            <Text style={styless.item}>aNa</Text>
            <Text style={styless.item}>Lu</Text>
            <Text style={styless.item}>Esther</Text>
            <Text style={styless.item}>Berni</Text>
            <Text style={styless.item}>Ale</Text>
            <Text style={styless.item}>Sabrina</Text>
            <Text style={styless.item}>Malena</Text>
            <Text style={styless.item}>Ale</Text>
            <Text style={styless.item}>Betty</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styless = StyleSheet.create({
  containerr: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});

const butttonClicked = () => {
  alert('Has pulsado!!!');
};

export default Home;

// npx react-native run-ios
