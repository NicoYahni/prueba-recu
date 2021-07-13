import React, { Component } from 'react';
// import { styleText } from './Styles';
import { Screen_3} from "./screens/Screen_3";
import { Screen_1} from "./screens/Screen_1";
import {
  Text,
  View,
  
  // Button,
  // Alert,

  StyleSheet
  // ScrollView
 
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

class App extends Component {


// botonAlert() {
//   Alert.alert(
//     "El contador se encuentra en" + this.state.contador,

//     [
//       {text: "gracias!", onPress: () => this.setState({contador: 0}) }
//     ]
//   );
// }
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Screen 1" component={Screen_1}/>
          <Drawer.Screen name="Screen 3" component={Screen_3}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
   
  }
}

// const styles = StyleSheet.create({
//   styleText: {
//     color:'green'
//   }
// })
//Pongo esto en el documento Style.js





export default  App;