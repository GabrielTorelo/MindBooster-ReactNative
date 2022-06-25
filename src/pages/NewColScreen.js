import * as React from 'react';
import {View, StyleSheet, Text, Pressable, TextInput, ImageBackground} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const upImage = () => {
    console.log('UPLOAD-IMAGE - CLICK');
}

const cadNewCollection = () => {

}

export default class NewColScreen extends React.Component {
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
                        style={[styles.input, styles.inputName]}
                    />
                    <TextInput
                        editable
                        multiline
                        maxLength={150}
                        label='Descricao'
                        placeholder='Digite a descrição'
                        style={[styles.input, styles.inputDesc]}
                    />
                    <Pressable
                        style={styles.bgImagePress}
                        onPress={upImage}
                    >
                        <ImageBackground
                            style={styles.bgImage}
                        >
                            <Ionicons
                                name='add'
                                style={styles.bgIcon}
                                onPress={upImage}
                            ></Ionicons>
                        </ImageBackground>
                    </Pressable>
                    
                    <Pressable 
                        style={[styles.btn, styles.bgRegister]}
                        onPress={() => this.props.navigation.navigate('Mycol')}
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
        backgroundColor: '#efefef',
        height: '35%',
        justifyContent: 'center',
        marginBottom: 11,
    },
    bgImage: {
        justifyContent: 'center',
    },
    bgIcon: {
        color: 'rgba(0,0,0,0.2)',
        fontSize: 84,
        position: 'absolute',
        alignSelf: 'center',
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
