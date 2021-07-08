import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  // Alert,
  TextInput,
  TouchableOpacity
 
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      textHandler: "",
      texto: ""
    }
  }

// botonAlert() {
//   Alert.alert(
//     "El contador se encuentra en" + this.state.contador,

//     [
//       {text: "gracias!", onPress: () => this.setState({contador: 0}) }
//     ]
//   );
// }
  render() {

    return (
      <View style={{flex:1, alignItems:'center'}}>
        {/* <Text style={{fontSize:30}}>Contador: {this.state.contador}</Text> */}
        <Text style={{fontSize:30}}>Handler: {this.state.textHandler}</Text>
        <Text style={{fontSize:30}}>Texto: {this.state.texto}</Text>
        {/* <Button title="incrementar" onPress={() => this.setState({contador: this.state.contador + 1})}/>
        <Button title="decrementar" onPress={() => this.setState({contador: this.state.contador - 1})}/>
        <Button title="reset" onPress={() => this.setState({contador: 0})}/> */}

      <TextInput secureTextEntr={true} style={{borderWidth:2, borderStyle:'solid',borderRadius:200}} 
                 onChangeText= {text => this.setState({textHandler: text})} />
      

      <TouchableOpacity onPress= {() => this.setState({texto: this.state.textHandler})}>
        <Button color="green" title="Presioname" onPress={this.alertShow} />

      </TouchableOpacity>

      </View>
    )
  }
}
