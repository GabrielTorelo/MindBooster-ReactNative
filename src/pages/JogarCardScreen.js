import * as React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import CardJogar from '../components/CardJogar';

const cardJogar = () => {
    console.log('VIRAR - CLICK');
}

export default class JogarCardScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Cartão 1/8</Text>
        <CardJogar />
        <Pressable
            onPress={cardJogar}
            style={[styles.btn, styles.bgRegister]}
        >
          <Text style={styles.btnText}>VIRAR</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#332E56',
        height: '100%',
        width: '100%',
        paddingTop: '7%',
        paddingBottom: '6.56%',
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
    btnText: {
        color: 'white',
    },
    bgRegister: {
        backgroundColor: '#6a61a1',
        borderRadius: 5,
    },
})
