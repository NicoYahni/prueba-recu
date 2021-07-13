import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  // Alert,

  // ScrollView
 
} from 'react-native';


 class Screen_1 extends Component {
   constructor(){
     super();
     this.state = {
       users: []
     }
   }
 


  componentDidMount(){
     fetch('https://randomuser.me/api/?results=10' )
     .then(response=> response.json())
     .then((result)=>{
       this.setState({users: result.results})
     })
    }

async storeData() {
  try{
    const jsonUsers = JSON.stringify(this.state.users);
  await AsyncStorage.setItem("Users", jsonUsers);
  console.log("datos almacenados");
  }catch(e) {
    console.log(e);
  }
}

renderItem= ({item})=>{
  return(
    <View>
    <Text key={item.login.uuid}> {item.name.first}</Text>
    </View>

  )
}
  render() {
    const values = this.state.users.map( item =>
      <Text style={styles.card} key={item.login.uuid}> {item.name.first}</Text>
      )

    return (
      
    
          <View style={styles.container}>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Text style={{left:10, fontSize:50, buttom:200}}>
              =
            </Text>
      </TouchableOpacity>
              <Text style={{color:"blue"}}>pantalla 11111111</Text>
              {values}
              <FlatList
      data={this.state.users}
      keyExtractor= {(item, idx)=> idx.toString()}
      renderItem={this.renderItem}>
        </FlatList> 
            <Button onPress={this.storeData.bind(this)} title="guardar datos" />
          </View>

     
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent:'center'
  },
  
})


export { Screen_1};