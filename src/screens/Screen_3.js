import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  Text,
  View,
  Button,
  Modal,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

class Screen_3 extends Component {
    constructor() {
        super();
            this.state = {
                importedUsers: [],
                showModal: false,
            }
    }

    async getData() {
        try{
            const resultado = await AsyncStorage.getItem('Users');
            this.setState({importedUsers: JSON.parse(resultado)});

        }catch(e) {
            console.log(e);
        }
    }

    renderItem= ({item})=>{
        return(
            <View>
            <Text key={item.login.uuid}> {item.name.first}</Text>
            <Image source={{uri: item.picture.medium}}> </Image>
            </View> 
        )
    }

    render () {
        // const values = this.state.importedUsers.map( item =>
          
        //   )
    
        return (
            
              <View>
                  <Text style={{color:"blue"}}>pantalla 11111111</Text>
                  {/* {values} */}

                  <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Text style={{left:10, fontSize:50, buttom:200}}>
              =
            </Text>
      </TouchableOpacity>
                
                <Button onPress={this.getData.bind(this)} title="Recuperar datos" />
                <Button onPress={ () => this.setState({importedUsers: []})} title="Borrar datos" />
                <Button title="Show modal" onPress={() => this.setState({showModal:true})}> </Button>
                <Modal visible={this.state.showModal} animationType="slide">
                    <View style={modalContainer}>
                        <Text style={modal}> holaaaaa </Text>
                        <Text style={closeModal} onPress={() => this.setState({showModal: false})}> Close (X) </Text>
                    </View>
                </Modal>
              </View>

//<FlatList    
// data={this.state.importedUsers} 
// keyExtractor= {(item, idx)=> idx.toString()}
// renderItem={this.renderItem}
// />

            
        ) 
      }
}


const modalContainer = {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      };

      const modal = {
       height: '70%',
       width: '100%',
       backgroundColor: 'white',
       justifyContent: 'center',
       alignItems: 'center',
       elevation: 20,
       borderWidth: 1,

      };
      const closeModal = {
       color:'white',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
       };
     


export   {Screen_3};