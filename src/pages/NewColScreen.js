import * as React from 'react';
import {View, StyleSheet, Text, Pressable, TextInput, ImageBackground} from 'react-native';
import firebase from '../config/firebase';
import Ionicons from '@expo/vector-icons/Ionicons';

const database = firebase.firestore();

export default class NewColScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: [],
            idUser: this.props.navigation.state.params.idUser,
            idCol: this.props.navigation.state.params.idCol,
            name: '',
            image: '',
            desc: '',
            errorEdit: false,
        };
        
    };

    componentDidMount(){
        if (this.state.idCol !== '') {
            database.collection(this.state.idUser).doc(this.state.idCol).get().then((doc) => {
                if (doc.exists) {
                    this.setState({name: doc.data().nome, image: doc.data().image, desc: doc.data().desc})
                }
            }).catch(() => {
                this.setState({errorEdit: true})
            });
        }
    };

    update_createCol = () => {
        if (this.state.idCol !== '') {
            database.collection(this.state.idUser).doc(this.state.idCol).set({
                nome: this.state.name,
                desc: this.state.desc
            })
            .then(() => {
                this.props.navigation.navigate('Mycol');
            })
            .catch(() => {
                this.setState({errorEdit: true})
            });
        }
        else{
            
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Preencha os dados referente à coleção a ser criada</Text>
                </View>
                <View style={{justifyContent: 'center',}}>
                    <TextInput
                        editable
                        maxLength={40}
                        label='NomeColecao'
                        placeholder='Digite o nome da coleção'
                        onChangeText={(name) => this.setState({name: name})}
                        value={this.state.idCol != '' ? this.state.name : ''}
                        style={[styles.input, styles.inputName]}
                    />
                    <TextInput
                        editable
                        multiline
                        maxLength={150}
                        label='Descricao'
                        placeholder='Digite a descrição'
                        onChangeText={(desc) => this.setState({desc: desc})}
                        value={this.state.idCol != '' ? this.state.desc : ''}
                        style={[styles.input, styles.inputDesc]}
                    />
                    <Pressable
                        style={styles.bgImagePress}
                    >
                        <ImageBackground
                            style={styles.bgImage}
                        >
                            <Ionicons
                                name='add'
                                style={styles.bgIcon}
                            ></Ionicons>
                        </ImageBackground>
                    </Pressable>
                    {
                        this.state.errorEdit === true
                        ?
                            <Ionicons
                                name='warning'
                                style={styles.warning}
                            ><Text style={styles.helpSenha}> Erro ao editar! Por favor reinicie o aplicativo! </Text></Ionicons>
                        :
                            <View />
                    }
                    <Pressable 
                        style={[styles.btn, styles.bgRegister]}
                        onPress={this.update_createCol}
                    >
                        <Text style={styles.btnText}>CADASTRAR</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable 
                        style={[styles.btn, styles.bgCancel]}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.btnText}>CANCELAR</Text>
                    </Pressable>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#332E56',
        height: '100%',
        width: '100%',
        paddingLeft: '7%',
        paddingRight: '7%',
    },
    input: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        marginBottom: 11,
    },
    inputName: {
        height: '10%',
    },
    inputDesc: {
        height: '20%',
    },
    bgImagePress: {
        backgroundColor: 'rgba(239, 239, 239, 0.1)',
        height: '35%',
        justifyContent: 'center',
        marginBottom: 7,
    },
    bgImage: {
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    bgIcon: {
        color: 'rgba(0,0,0,0.2)',
        fontSize: 84,
        position: 'absolute',
        alignSelf: 'center',
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
    title: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: '4%',
    },
    btn: {
        width: '100%',
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgCancel: {
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 1,
        borderColor: '#FDFDFE',
        borderRadius: 5,
        marginBottom: 19,
    },
    btnText: {
        color: 'white',
    },
    bgRegister: {
        width: '100%',
        backgroundColor: '#6a61a1',
        borderRadius: 5,
    },
})
