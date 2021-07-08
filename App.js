import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    }
  }

  render() {

    return (
      <View style={{flex:1, alignItems:'center'}}>
        <Text style={{fontSize:30}}>Contador: {this.state.contador}
        </Text>
        <Button title="incrementar" onPress={() => this.setState({contador: this.state.contador + 1})}/>
        <Button title="decrementar" onPress={() => this.setState({contador: this.state.contador - 1})}/>
        

      </View>
    )
  }
}
