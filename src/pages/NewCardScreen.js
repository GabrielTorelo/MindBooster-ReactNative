import * as React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import CardNewCard from '../components/CardNewCard';

const cadNewCard = () => {
    console.log('CADASTRO - CLICK');
}

const cancel = () => {
    console.log('CANCELAR - CLICK');
}

export default class NewCardScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={{justifyContent: 'center',}}>
                    <Text style={styles.title}>Preencha os dados da frente e do verso do flashcard</Text>
                    <CardNewCard />
                    <Pressable 
                        style={[styles.btn, styles.bgRegister]}
                        onPress={cadNewCard}
                    >
                        <Text style={styles.btnText}>CADASTRAR</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable 
                        style={[styles.btn, styles.bgCancel]}
                        onPress={cancel}
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
    title: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: '10%',
        marginBottom: '10%',
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
        marginTop: 16,
        borderRadius: 5,
    },
})
