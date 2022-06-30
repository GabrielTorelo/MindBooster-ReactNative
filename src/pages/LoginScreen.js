import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Image, Pressable, KeyboardAvoidingView, Platform} from 'react-native';
import firebase from '../config/firebase';
import Ionicons from '@expo/vector-icons/Ionicons';

const helpSenha = () => {
    console.log('HELP-SENHA - CLICK')
}

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            errorLogin: '',
        };
    };
    loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .then((userCredential) => {
                let user = userCredential.user;
                
                this.props.navigation.navigate('Mycol', {idUser: user.uid});
            })
            .catch((error) => {
                this.setState({errorLogin: true});
            });
    };
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('Mycol', {idUser: user.uid});
            }
        });
    };
    render() {
        return(
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.top}>
                    <Image
                        style={{marginBottom: -30}}
                        source={require('../images/logo.png')}
                    />
                    <Text style={styles.title}>Mind Booster</Text>
                </View>
                <View style={styles.middle}>
                    <TextInput
                        editable
                        label='E-mail'
                        placeholder='Digite o E-mail'
                        onChangeText={(email) => this.setState({email: email})}
                        value={this.state.email}  
                        style={styles.input}
                    />
                    <TextInput
                        editable
                        label='Senha'
                        secureTextEntry={true}
                        placeholder='Digite a Senha'
                        onChangeText={(senha) => this.setState({senha: senha})}
                        value={this.state.senha} 
                        style={styles.input}
                    />
                    {
                        this.state.errorLogin === true
                        ?   
                            <Ionicons
                                name='warning'
                                style={{fontSize: 15, color: 'orange', marginBottom: 5,}}
                            ><Text> E-mail ou Senha inválida!</Text></Ionicons>
                        :
                            <View />
                    }
                    <Text
                        onPress={helpSenha} 
                        style={styles.helpSenha}
                    >Esqueci a senha</Text>
                    <Pressable
                        disabled={this.state.email === '' || this.state.senha === '' ? true : false} 
                        style={[styles.btn, styles.bgLogin]}
                        onPress={this.loginFirebase}
                    >
                        <Text style={styles.btnText}>ENTRAR</Text>
                    </Pressable>
                </View>
                <View style={styles.bottom}>
                    <Pressable 
                        style={[styles.btn, styles.bgRegister]}
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.btnText}>CADASTRE-SE</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    top: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 47,
    },
    middle: {
        width: '79.85%',
        alignItems: 'center',
        alignSelf: 'center',

    },
    bottom: {
        width: '79.85%',
        alignSelf: 'center',
        marginBottom: 35,
    },
    title: {
        color: 'white',
        fontSize: 56,
    },
    container: {
      flexDirection: 'column',
      display: 'flex',
      flex: 1,
      backgroundColor: '#332E56',
      justifyContent: 'space-between',
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        height: 57,
        margin: 5.5,
        paddingLeft: 16,
    },
    helpSenha: {
        color: 'white',
        marginBottom: 21,
        alignSelf: 'flex-end',
    },
    btn: {
        width: '100%',
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgLogin: {
        backgroundColor: '#6a61a1',
    },
    bgRegister: {
        backgroundColor: '#b58d97',
    },
    btnText: {
        color: 'white'
    },
  });
