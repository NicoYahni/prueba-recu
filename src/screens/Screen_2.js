import React, { Component } from 'react';
// import { styleText } from './Styles';
import {
  Text,
  View,
  // Button,
  // Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet
  // ScrollView
 
} from 'react-native';

 class Screen_2 extends Component {
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
        {/* <ScrollView style={styleInput}> */}
        {/* <Text style={{fontSize:30}}>Contador: {this.state.contador}</Text> */}
        <Text style={{fontSize:30}}> {this.state.text}</Text>
  
        {/* </ScrollView> */}
        {/* <Button title="incrementar" onPress={() => this.setState({contador: this.state.contador + 1})}/>
        <Button title="decrementar" onPress={() => this.setState({contador: this.state.contador - 1})}/>
        <Button title="reset" onPress={() => this.setState({contador: 0})}/> */}

      <TextInput secureTextEnter={true} style={styleInput} 
                 onChangeText= {value => this.setState({textHandler: value})} />
      

      <TouchableOpacity onPress= {() => this.setState({texto: this.state.textHandler})}>
        <View >
            <Text style={styleText.nombre}> Mostras Texto </Text>
        </View>

      </TouchableOpacity>

      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   styleText: {
//     color:'green'
//   }
// })
//Pongo esto en el documento Style.js


const styleInput = {
  borderWidth: 2,
  marginBottom: 420,
  marginTop: 100,
  width: 300,
  
  borderRadius: 10,
 
  
}


export default Screen_2;