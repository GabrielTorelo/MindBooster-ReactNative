import React from 'react';
import propTypes from 'prop-types';
import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, View, Text, Alert} from 'react-native';

function CardViewCollection() {
  const removeCollectionAlert = () =>
    Alert.alert(
      '',
      'Você tem certeza que deseja excluir esse cartão?',
      [
        {
          text: 'SIM',
          onPress: () => console.log('EXCLUIR - SIM')
        },
        {
          
        },
        { text: 'CANCELAR', onPress: () => console.log('EXCLUIR - CANCELAR') }
      ]
    );
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'column'}}>
            <Text style={styles.cardTextTop}>Frente</Text>
            <Text style={styles.cardTextBottom}>Árvore</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
            <Text style={styles.cardTextTop}>Verso</Text>
            <Text style={styles.cardTextBottom}>Tree</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Ionicons
                name='create'
                style={styles.cardEdit}
                onPress={() => console.log('EDIT CLICK')}
            ></Ionicons>
            <Ionicons 
                name='trash'
                style={styles.cardTrash}
                onPress={removeCollectionAlert}
            ></Ionicons>
        </View>
    </View>
  );
}

export default CardViewCollection;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '90%',
        height: 75,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 1.5,
        marginBottom: 9.5,
        padding: 17,
        borderRadius: 10,
    },
    cardEdit: {
        color: '#4472C4',
        fontSize: 30,
    },
    cardTrash: {
        color: '#FF0000',
        fontSize: 30,
        marginLeft: 17,
    },
    cardTextTop: {
        fontSize: 12,
        color: '#868686',
    },
    cardTextBottom: {
        fontSize: 24,
        color: '#27aca7',
        fontWeight: '700'
    },
});

CardViewCollection.propTypes = {
  data: propTypes.object,
}.isRequired;
