import * as React from 'react';
import {View, StyleSheet, TextInput, Pressable, Text} from 'react-native';
import {FAB} from 'react-native-paper';
import CardViewCollection from '../components/CardViewCollection';

export default class ViewCollection extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    label='Filtro'
                    placeholder='Filtro'
                    style={styles.input}
                />
                <Pressable 
                    style={styles.btn}
                    onPress={() => console.log('JOGAR CLICK')}
                >
                    <Text style={styles.btnText}>Jogar!</Text>
                </Pressable>
                <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={() => this.props.navigation.navigate('NewCollection')}
                />
                <CardViewCollection />
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
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        height: 57,
        paddingLeft: 16,
        margin: 17,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    btn: {
        width: 158,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#57966a',
        borderRadius: 5,
        marginTop: 6,
        marginBottom: 24,
    },
    btnText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
    },
    fab: {
        position: 'absolute',
        backgroundColor: '#7a71af',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})
