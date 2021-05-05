import React from 'react';
import{
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';

import {db} from './config/config';

class AdicionaItens extends React.Component{
    State = {
        item: ''
    };

    SalvaItem = () =>{
        db.collection('/itens').add({
            item: this.state.item
        }).then(()=>{
            Alert.alert('Item salvo!');
        })

    };

    render(){
        return(
            <View>

            </View>
        )
    }

}
export default AdicionaItens;

const styles = StyleSheet.create({
    conteudoPrincipal:{
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    titulo:{
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput:{
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    textoBtn:{
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    btn: {
        height: 45,
        flexDirection:  'row',
        backgroundColor: 'white',
        borderColor: 'white',
        boderWidth: 1,
        borderRadius: 1,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent:   'center'
    }
});
