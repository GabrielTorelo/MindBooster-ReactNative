import React from 'react';
import {StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView} from 'react-native';
import firebase from '../config/firebase';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class NewUserScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            reSenha: '',
            errorRegister: '',
            errorCode: '',
        };
    };
    registerFirebase = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .then((userCredential) => {
                let user = userCredential.user;
                
                this.props.navigation.navigate('Mycol', {idUser: user.uid});
            })
            .catch((error) => {
                this.setState({errorRegister: true, errorCode: error.code});
            });
    };
    renderSwitch(param) {
        switch(param) {
            case 'auth/invalid-email':
                return <Ionicons
                            name='warning'
                            style={styles.warning}
                        ><Text style={styles.helpSenha}> E-mail inválido </Text></Ionicons>;
            case 'auth/weak-password':
                return <Ionicons
                            name='warning'
                            style={styles.warning}
                        ><Text style={styles.helpSenha}> Senha deve conter pelo menos 6 caracteres</Text></Ionicons>;
            case 'auth/email-already-in-use':
                return <Ionicons
                            name='warning'
                            style={styles.warning}
                        ><Text style={styles.helpSenha}> Usuário já cadastrado</Text></Ionicons>;
            default:
                return <Ionicons
                            name='nuclear'
                            style={styles.warning}
                        ><Text style={styles.helpSenha}> Erro ao cadastrar! Por favor reinicie o aplicativo! </Text></Ionicons>;
        }
    };
    render() {
        return(
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.top}>
                    <Text style={styles.title}>Preencha os dados do seu cadastro</Text>
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
                    <TextInput
                        editable
                        label='Senha'
                        secureTextEntry={true}
                        placeholder='Repita a senha'
                        onChangeText={(reSenha) => this.setState({reSenha: reSenha})}
                        value={this.state.reSenha}
                        style={styles.input}
                    />
                    {
                        this.state.errorRegister === true
                        ?
                            this.renderSwitch(this.state.errorCode)
                        :
                            <View />
                    }
                    {
                        this.state.senha !== '' && 
                        this.state.reSenha !== '' && 
                        this.state.senha !== this.state.reSenha
                        ?
                            <Ionicons
                                name='warning'
                                style={styles.warning}
                            ><Text style={styles.helpSenha}> Senha não confere</Text></Ionicons>
                        :
                            <View />
                    }
                    {
                        this.state.senha !== '' && 
                        this.state.reSenha !== '' && 
                        this.state.senha.length < 6
                        ?
                            this.renderSwitch('auth/weak-password')
                        :
                            <View />
                    }
                    <Pressable
                        disabled=
                            {
                                this.state.email === '' || 
                                this.state.senha === '' || 
                                this.state.reSenha === '' || 
                                this.state.senha !== this.state.reSenha ||
                                this.state.senha.length < 6
                                ? 
                                    true 
                                : 
                                    false
                            }
                        style={[styles.btn]}
                        onPress={this.registerFirebase}
                    >
                        <Text style={styles.btnText}>CADASTRAR</Text>
                    </Pressable>
                </View>
                <View style={styles.bottom}></View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    top: {
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 28,
        marginTop: '6.68%',
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
    warning: {
        fontSize: 15,
        color: 'orange',
        marginBottom: 5,
        marginLeft: '3.88%',
        alignSelf: 'flex-start',
    },
    helpSenha: {
        color: '#D94F55',
        display: 'none',
    },
    btn: {
        width: '100%',
        height: 47,
        backgroundColor: '#6a61a1',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 21,
    },
    btnText: {
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    },
  });
