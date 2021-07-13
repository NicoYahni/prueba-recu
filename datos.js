// Crear carpeta:

// expo init NombreDelProyecto
// expo start
// pones arriba 'File'=> Open y abris el NombreDelProyecto y ya debería andar (se tiene que abrir en Google Chrome o Safari la página de Expo)
// pones npm install para instalar las dependencias

// GitHub:
// Arriba a la izquierda, botón verde que dice NEW
// nombre que sea
// Copias el http
// abris git kraken y github desktop y pones clone a repo

// Crear carpeta SRC, poner el archivo de App.js a dentro de ahi y despues ir a node-modules a expo y cambiar en AppeEntry.js a import App from '../../src/App';

// App.js:

// Borrar todo lo que aparece y poner:

// import React, { Component} from 'react';
// import {
//  Text,
//  View,
//  Button,
//  Image,
//  Alert
// } from 'react-native';
 
// export default class App extends Component {
 
//  render() {
 
//    return (
//      <View>
//        <Text>
//          Anda?
//        </Text>
//      </View>
//    )
//  }
// }






// Crear variable de estado:
// Creo constructor en el componente:
// export default class App extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      contador: 0,
//    }
//  }

// Llamo el estado con un setState a través de un onPress si es un botón:
// <Button title="incrementar" onPress={() => this.setState({contador: this.state.contador + 1})}/>



// Style:
// en línea: se pone en doble llave style= {{ …. }}
// objeto:
// 	const styleInput = {
//  borderWidth: 1,
//  marginBottom: 420,
//  marginTop: 100,
//  width: 300,
//  borderWidth:3,
// }

// y pongo “styleInput” dentro de un style ( style={styleInput}) para llamarlo.

// Hoja de estilo:
// Creo Styles.js al lado de App.js y le pongo esto:
// import {StyleSheet} from 'react-native';
 
// const styles = StyleSheet.create({
//      styleText: {
//        color:'green'
//      }
//    })
 
 
 
// export {stylesText}
// En el export exporto todos los styles que hayan

// Importo el Styles.js en el App.js
// import { styles } from './Styles';
// y también a dentro del import dónde está Text,View,etc. como StyleSheet

// Cuando quiero llamar a algo de la hoja de estilos pongo:
// style={stylesText.styleText}


 




















// coneccion de paginas:
// Dentro de src armas folder de Screens.
// Copias archivo package.json y lo pones en esta carpeta todo vacío que diga “name”: ”screen”
// Copias app.js y lo pones en las pantallas
// Cambias en la class App por class (nombre de la página) y lo mismo  lo que está antes del constructor
// Importas arriba de todo en el App.js las paginas


// fetch de api:
// agregas user: [ ], en el this.state del constructor


// componentDidMount(){
//    fetch('https://randomuser.me/api/?results=' + this.state.numeroTarjetasImportadas)
//    .then(response=> response.json())
//    .then((result)=>{
//      this.setState({users: result.results, activity: false})
//    })
//   }

// 3. pones en el render lo que queres traer del api. (para traer dato de nombre:
//   const values = this.state.users.map(item =>
//      <Text> {item.name.first}</Text>
//      )

// 	AGREGAR {values} en el text del return


// para guardar localmente:


// async storeData() {
//  try{
//    const jsonUsers = JSON.stringify(this.state.users);
//  await AsyncStorage.setItem("Users", jsonUsers);
//  console.log("datos almacenados");
//  }catch(e) {
//    console.log(e);
//  }
// }


// 2. correr en la terminal: npm install @react-native-async-storage/async-storage 
// 3. Poner esto en el render al principio:
//  const values = this.state.users.map( item =>
//      <Text key={item.login.uuid}> {item.name.first}</Text>
//      )

// 4. Poner siguiente botón en el return abajo de todo:
// <Button onPress={this.storeData.bind(this)} title="guardar datos" />









// para recuperar datos:
// En la pagina donde queres que aparezcan los datos guardados pones arriba:
// import AsyncStorage from '@react-native-async-storage/async-storage'
// Despues le agregas al constructor al this.state un “importedUsers; [ ]”
// Pones el async getData:
// async getData() {
//        try{
//            const resultado = await AsyncStorage.getItem('Users');
//            this.setState({importedUsers: JSON.parse(resultado)});
 
//        }catch(e) {
//            console.log(e);
//        }
//    }

// Pones esto despues del render al principio:
// const values = this.state.importedUsers.map( item =>
//          <Text key={item.login.uuid}> {item.name.first}</Text>
//          )
// Pones está boton en el return al final:
// <Button onPress={this.getData.bind(this)} title="recuperar datos" />


// Drawer navigator:
// npm install @react-navigation/native
// Importar arriba en el App: import '@react-navtive-gesture-handler';
// Importar antes del class App extends Component:
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// Poner const Stack = createStackNavigator();
